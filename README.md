# Brutalist Portfolio for Astro

Osobní portfolio v češtině postavené v Astro s důrazem na:

- obsahově řízenou architekturu
- tmavou brutalistní identitu v černo-žluté paletě
- rychlost, přístupnost a jednoduché rozšiřování
- přehled pro recruitery a jednoduché rozšiřování projektů

## Design koncept

Web staví na kontrastu černé a saturované žluté, ostré geometrii, výrazné typografii a
editorial rytmu. Cílem není „retro brutalismus“, ale současný, technický a profesionální
výraz s jasnou strukturou a pečlivou hierarchií.

## Architektura

Krátký editovatelný obsah je uložený v `src/data/`.

- `src/data/profile.ts`: hero texty, bio, principy, timeline, FAQ
- `src/data/certificates.ts`: certifikáty pro terminal
- `src/data/skills.ts`: skupiny dovedností a úrovně
- `src/data/socials.ts`: kontaktní odkazy
- `src/data/navigation.ts`: hlavní navigace
- `src/data/site.ts`: SEO defaulty, site URL, dostupnost, CV placeholder

Dlouhý obsah je uložený v Astro content collections.

- `src/content/projects/*.md`: projekty
- `src/content/notes/*.md`: volitelný obsah pro budoucí rozšíření
- `src/content.config.ts`: Zod schémata, loadery a validace frontmatteru

Prezentační vrstva je rozdělená do znovupoužitelných částí.

- `src/layouts/BaseLayout.astro`: layout, meta tagy, view transitions
- `src/components/*`: header, footer, terminal, karty, timeline, kontakt
- `src/styles/global.css`: design tokeny a globální systém stylů

## Lokální spuštění

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Preview produkční verze:

```bash
npm run preview
```

## How to add content

### Upravit intro a hlavní texty

Edituj:

- `src/data/profile.ts`

Tady změníš:

- headline
- intro
- quick facts
- about text
- principles
- timeline
- recruiter FAQ

### Upravit kontaktní odkazy

Edituj:

- `src/data/socials.ts`

Tady změníš:

- GitHub
- LinkedIn
- e-mail
- CV placeholder

### Upravit certifikáty

Edituj:

- `src/data/certificates.ts`

Každá položka může obsahovat:

- `title`
- `issuer`
- `year`
- `status`
- volitelně `href`

### Upravit SEO a základní metadata

Edituj:

- `src/data/site.ts`

Tady změníš:

- `siteUrl`
- title
- description
- OG image path
- keywords
- availability badge

`astro.config.ts` používá `siteUrl` přímo z tohoto souboru, takže URL webu měníš na jednom místě.

### Upravit navigaci

Edituj:

- `src/data/navigation.ts`

### Upravit dovednosti

Edituj:

- `src/data/skills.ts`

Každá skupina má:

- `title`
- `description`
- `items[]` s `name`, `level`, `note`

Povolené `level`:

- `silne`
- `prakticky`
- `rozvijim`

### Přidat nový projekt

Vytvoř nový soubor v:

- `src/content/projects/novy-projekt.md`

Použij tento frontmatter:

```md
---
category: "personal"
title: "Název projektu"
summary: "Krátké shrnutí do přehledu."
description: "Delší popis pro hero detailu projektu."
proof: "Proč je projekt relevantní pro cílovou roli."
learning: "Co sis na projektu prakticky odnesl."
nextStep: "Co by byl další rozumný krok."
stack:
  - Astro
  - TypeScript
role: "Moje role"
featured: true
year: 2026
status: "Osobní projekt"
github: "https://github.com/username/repo"
demo: "https://example.com"
order: 4
tags:
  - portfolio
  - frontend
---

## Kontext

Popis výchozí situace.

## Přístup

Jak jsi problém řešil.

## Výsledek

Co z toho vzniklo a proč je to důležité.
```

Povinné jsou všechny položky kromě `github`, `demo`, `proof`, `learning` a `nextStep`.

`category` musí být jedna z těchto hodnot:

- `freelance`
- `work`
- `personal`

Stránka projektů se podle této hodnoty rozdělí automaticky do sekcí:

- Freelance web development
- Pracovní a HRIT projekty
- Osobní a studijní projekty

## Jak změnit theme barvy

Edituj:

- `src/styles/global.css`

Nejdůležitější tokeny:

- `--color-bg`
- `--color-panel`
- `--color-accent`
- `--color-text`
- `--color-line-strong`

## SEO a sdílení

Meta data se řeší v:

- `src/data/site.ts`
- `src/layouts/BaseLayout.astro`

Statické assety:

- `public/favicon.svg`
- `public/og-default.svg`
- `public/site.webmanifest`

Sitemap route:

- `src/pages/sitemap-index.xml.ts`

## Netlify deployment

Projekt je připravený jako statický Astro web.

Použité soubory:

- `netlify.toml`
- `package.json`

Na Netlify stačí:

1. `npm install`
2. `npm run build`
3. publish directory `dist`

## Poznámky k přizpůsobení

- Nahraď placeholdery v `src/data/profile.ts` a `src/data/socials.ts`.
- Pokud doplníš reálné CV, nastav odkaz v `src/data/socials.ts`.
- Pokud chceš změnit tonalitu copy, většina viditelného textu je v datech nebo markdown souborech, ne v komponentách.
