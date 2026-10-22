import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(root, "docs");
const pdfCss = path.join(root, "scripts", "pdf.css");
let tempRoot;
const chromePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  path.join(
    process.env.ProgramFiles || "C:\\Program Files",
    "Google",
    "Chrome",
    "Application",
    "chrome.exe",
  );

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${command} exited with code ${result.status}`);
  }
}

function getFiles(folder) {
  return fs
    .readdirSync(folder, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(folder, entry.name);
      if (entry.isDirectory()) {
        return getFiles(entryPath);
      }
      return entry.isFile() && entry.name.endsWith(".md") ? [entryPath] : [];
    });
}

function frontmatterValue(markdown, field) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return undefined;
  }

  const value = match[1].match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1];
  if (!value) {
    return undefined;
  }
  return value.startsWith('"') ? JSON.parse(value) : value.replace(/^['"]|['"]$/g, "");
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n/, "");
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ıİ]/g, "i")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getTitle(file) {
  const markdown = fs.readFileSync(file, "utf8");
  return (
    frontmatterValue(markdown, "title") ||
    markdown.match(/^#\s+(.+)$/m)?.[1] ||
    path.basename(file, ".md")
  );
}

function createGroups() {
  const componentFolders = [
    "anasayfa-ortak-alanlar",
    "urun-sayfalari",
    "kategori-ve-arama",
    "icerik-ve-kurumsal",
    "hesap-sepet-ve-yasal",
    "tanitim-ve-ozel-sayfalar",
  ];
  const groups = [
    {
      title: "Kılavuzun ana sayfası",
      files: [path.join(docsRoot, "index.md")],
    },
    {
      title: "Başlangıç",
      files: [
        path.join(docsRoot, "baslangic", "00-temayi-taniyin.md"),
        path.join(docsRoot, "baslangic", "01-kurulum-ve-ilk-acilis.md"),
      ],
    },
    {
      title: "Studio'da Düzenleme",
      files: [
        path.join(docsRoot, "studio", "01-ikas-studio.md"),
        path.join(docsRoot, "studio", "02-gorsel-ve-icerik.md"),
        path.join(docsRoot, "studio", "03-dil-ve-url-rotalari.md"),
      ],
    },
    {
      title: "Bölüm Rehberi",
      files: [path.join(docsRoot, "bolumler", "index.md")],
    },
  ];

  for (const folder of componentFolders) {
    groups.push({
      title:
        JSON.parse(
          fs.readFileSync(path.join(docsRoot, "bolumler", folder, "_category_.json"), "utf8"),
        ).label,
      files: getFiles(path.join(docsRoot, "bolumler", folder)).sort((a, b) =>
        a.localeCompare(b, "tr"),
      ),
    });
  }

  groups.push(
    {
      title: "Yayınlama ve Sorun Giderme",
      files: [
        path.join(docsRoot, "yayinlama", "01-kontrol-listesi.md"),
        path.join(docsRoot, "yayinlama", "02-sorun-giderme.md"),
        path.join(docsRoot, "yayinlama", "03-bekleyen-dogrulamalar.md"),
      ],
    },
    {
      title: "İsteğe Bağlı Teknik Bilgiler",
      files: [path.join(docsRoot, "teknik-bilgiler", "01-proje-yapisi.md")],
    },
  );

  const seen = new Set();
  for (const group of groups) {
    group.id = `bolum-${slug(group.title)}`;
    group.files.forEach((file) => seen.add(path.resolve(file)));
  }

  const allFiles = getFiles(docsRoot).map((file) => path.resolve(file));
  const missing = allFiles.filter((file) => !seen.has(file));
  const missingFromDisk = [...seen].filter((file) => !fs.existsSync(file));
  if (missing.length || missingFromDisk.length) {
    throw new Error(
      `PDF source list mismatch. Unlisted: ${missing.length}; missing files: ${missingFromDisk.length}`,
    );
  }

  return groups;
}

function rewriteLinks(markdown, sourceFile, docIds) {
  const unwrapped = markdown
    .replace('<div className="guideCategoryCards">', "")
    .replace("</div>", "");
  const withLocalImages = unwrapped.replace(
    /\]\(\/assets\/img\/([^)]+)\)/g,
    "](../static/assets/img/$1)",
  );

  const withMarkdownLinks = withLocalImages.replace(
    /\]\(([^)\s]+\.md)(#[^)]*)?\)/g,
    (link, target) => {
      const decodedTarget = decodeURIComponent(target);
      const targetFile = path.resolve(path.dirname(sourceFile), decodedTarget);
      const targetId = docIds.get(targetFile);
      return targetId ? `](#${targetId})` : link;
    },
  );

  return withMarkdownLinks.replace(/\]\(([^)#\s]+\/)(#[^)]*)?\)/g, (link, target) => {
    const targetFolder = path.resolve(path.dirname(sourceFile), decodeURIComponent(target));
    const indexFile = path.join(targetFolder, "index.md");
    const fallbackFile = fs.existsSync(indexFile)
      ? indexFile
      : fs.existsSync(targetFolder)
        ? getFiles(targetFolder).sort((a, b) => a.localeCompare(b, "tr"))[0]
        : undefined;
    const targetId = fallbackFile ? docIds.get(path.resolve(fallbackFile)) : undefined;
    return targetId ? `](#${targetId})` : link;
  });
}

function buildPdfSource(groups) {
  const allFiles = groups.flatMap((group) => group.files);
  const docIds = new Map(
    allFiles.map((file) => [
      path.resolve(file),
      `doc-${slug(path.relative(docsRoot, file).replace(/\.md$/, ""))}`,
    ]),
  );
  const indexMarkdown = fs.readFileSync(path.join(docsRoot, "index.md"), "utf8");
  const version = indexMarkdown.match(/\*\*Sürüm:\*\*\s*(v\d+)/)?.[1];
  const date = indexMarkdown.match(/\*\*Yayın tarihi:\*\*\s*([^\r\n]+)/)?.[1]?.trim();
  if (!version || !date) {
    throw new Error("docs/index.md must define the guide version and publication date.");
  }

  const toc = groups
    .map((group) => {
      const pages = group.files
        .map((file) => {
          const title = getTitle(file);
          return `  - [${title}](#${docIds.get(path.resolve(file))})`;
        })
        .join("\n");
      return `- [${group.title}](#${group.id})\n${pages}`;
    })
    .join("\n");

  const body = groups
    .map((group) => {
      const divider = [
        '<div class="page-break"></div>',
        `<section class="pdf-divider"><h1 id="${group.id}">${escapeHtml(group.title)}</h1></section>`,
        '<div class="page-break"></div>',
      ].join("\n");
      const pages = group.files
        .map((file) => {
          const id = docIds.get(path.resolve(file));
          const markdown = rewriteLinks(stripFrontmatter(fs.readFileSync(file, "utf8")), file, docIds);
          return `<a id="${id}"></a>\n\n${markdown}`;
        })
        .join("\n\n");
      return `${divider}\n\n${pages}`;
    })
    .join("\n\n");

  const source = [
    `<section class="pdf-cover"><p class="eyebrow">KULLANIM KILAVUZU</p><h1>3Mash Tema Kılavuzu</h1><p>${escapeHtml(version)}</p><p>${escapeHtml(date)}</p></section>`,
    '<div class="page-break"></div>',
    "# İçindekiler",
    toc,
    '<div class="page-break"></div>',
    body,
  ].join("\n\n");

  return { source, version };
}

function main() {
  run("npm", ["run", "build:site"]);

  if (!fs.existsSync(chromePath)) {
    throw new Error(
      `Chrome was not found at ${chromePath}. Set PUPPETEER_EXECUTABLE_PATH to the installed Chrome path.`,
    );
  }

  tempRoot = fs.mkdtempSync(path.join(root, ".guide-pdf-"));
  try {
    const groups = createGroups();
    const { source, version } = buildPdfSource(groups);
    const sourcePath = path.join(tempRoot, "pdf-source.md");
    const configPath = path.join(tempRoot, "pdf-config.json");
    const generatedPdfPath = path.join(tempRoot, `3Mash-Kilavuz-${version}.pdf`);
    const finalPdfPath = path.join(root, `3Mash-Kilavuz-${version}.pdf`);

    fs.writeFileSync(sourcePath, source, "utf8");
    fs.writeFileSync(
      configPath,
      JSON.stringify(
        {
          dest: generatedPdfPath,
          stylesheet: [pdfCss],
          launch_options: {
            executablePath: chromePath,
            args: ["--no-sandbox"],
          },
          pdf_options: {
            format: "A4",
            printBackground: true,
            displayHeaderFooter: true,
            outline: true,
            margin: {
              top: "18mm",
              right: "16mm",
              bottom: "18mm",
              left: "16mm",
            },
            headerTemplate: "<div></div>",
            footerTemplate:
              '<div style="width:100%;font-size:8px;text-align:center;color:#667085"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
          },
        },
        null,
        2,
      ),
      "utf8",
    );

    run("npx", ["--no-install", "md-to-pdf", "--config-file", configPath, sourcePath]);
    fs.copyFileSync(generatedPdfPath, finalPdfPath);
    console.log(`Created ${path.basename(finalPdfPath)} from ${groups.reduce((count, group) => count + group.files.length, 0)} Markdown files.`);
  } finally {
    if (tempRoot) {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  }
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
