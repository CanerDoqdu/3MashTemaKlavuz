---
name: 3mash-guide-accuracy
description: Maintain accurate 3Mash Studio guide pages by deriving user-facing documentation from the current 3MashWeb component configuration and source behavior. Use for revising the Bölüm Rehberi or its component pages; do not use for unrelated site documentation.
---

# 3Mash Guide Accuracy

Use this skill when editing `C:\Users\caner\Desktop\3Mash-Kilavuz\docs\bolumler` against the 3Mash theme source at `C:\Users\caner\3MashWeb`.

## Source of truth

- Treat `ikas.config.json` in the source project as the authoritative list of registered components, their Studio labels, prop groups, prop types, and editable fields.
- Use each component's `src/components/<component>/types.ts` for user-facing field meanings when available.
- Use `index.tsx` only to verify visible behavior, dependencies, fallback behavior, or a prop whose meaning is not clear from the configuration and types.
- Do not state that a component is active on a live store solely because it is registered in the configuration.
- Do not infer a Studio capability from a similar component; verify the exact component first.

## Required audit before a page edit

For each guide page, identify its exact component by matching the document title to `ikas.config.json` `components[].name`. Confirm:

1. component name and `entry` path;
2. prop groups and their current names;
3. props used in the guide's “Sık kullanılan ayarlar” table;
4. behavior claims such as product binding, automatic values, visibility toggles, or multilingual support.

If a guide document has no exact registered component, label it as a guide/index page instead of describing it as a Studio section.

## Writing shape

Rewrite component pages into this order:

1. One short paragraph: what it does.
2. `## Ne zaman kullanılır?` with decision-focused bullets.
3. `## Studio’da kurulum` with only the necessary setup steps.
4. `## Sık kullanılan ayarlar` with a concise two-column table of the most useful fields or groups.
5. `## Gelişmiş ayarlar` with a smaller two-column table of less common groups.

Do not add a check list, a full prop dump, unverified store-specific values, or generic filler. Keep a field table only when it helps someone act in Studio.

## Accuracy rules

- Write Studio labels in Turkish if the current prop group/description is Turkish; preserve exact technical names only when they help locate a field.
- Separate static/preset sections from sections connected to an `IkasProduct` or other ikas data source.
- State a product connection requirement only if the component accepts and uses a `product` prop.
- Mention TR/EN content only if current configuration has separate English props or the component selects localized content.
- Mention a setting as “advanced” when it changes layout, colors, visibility, templates, JSON, or an integration rather than normal content.
- For `RICH_TEXT`, say that formatting is supported only if the corresponding source or prop description establishes it.
- Preserve existing safe warnings, but remove stale component counts and generated default-value tables.

## Scope and validation

- Do not create new documentation categories unless explicitly asked. Improve the pages within their existing category.
- Update relevant category/index text when a change affects how readers choose a component.
- Run `npm run build` in `C:\Users\caner\Desktop\3Mash-Kilavuz` after edits.
- Before handoff, compare the changed page titles with source component names and run `git diff --check`.
