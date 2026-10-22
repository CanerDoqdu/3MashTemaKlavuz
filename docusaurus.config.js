/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "3Mash Tema Kılavuzu",
  tagline: "3Mash ikas temasını düzenlemek isteyenler için hazırlanmış kılavuz",
  url: "https://3mash-tema-klavuz.vercel.app",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "tr",
    locales: ["tr"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["tr"],
        docsRouteBasePath: "/",
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    "docusaurus-plugin-image-zoom",
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "3Mash",
        src: "assets/img/3mash-logo.png",
        style: { height: "28px" },
      },
      title: "",
      items: [
        {
          label: "Başlangıç",
          to: "/baslangic/temayi-taniyin",
          position: "left",
        },
        {
          label: "Studio'da Düzenleme",
          to: "/studio/ikas-studio",
          position: "left",
        },
        {
          label: "Yeni Kategori Ekleme",
          to: "/yeni-kategori-ekleme/yeni-kategori-ekleme",
          position: "left",
        },
        {
          label: "Yeni Ürün Ekleme",
          to: "/yeni-urun-ekleme/yeni-urun-ekleme",
          position: "left",
        },
        {
          label: "Sıfırdan Bölüm Oluşturma",
          to: "/studio/panel-bolumleri/elementler",
          position: "left",
        },
        {
          label: "Yayınlama ve Sorun Giderme",
          to: "/yayinlama/tema-yayinlama",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    zoom: {
      selector: ".theme-doc-markdown img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(30, 30, 30)",
      },
    },
  },
};

module.exports = config;
