---
category: "personal"
title: "Kam na Rave"
summary: "Privacy-aware MVP pro sdílení hudebních akcí s uzamčenými detaily lokace."
description: "Produktový experiment, který kombinuje výrazné UI, databázový backend, validaci, hashování odemykacích kódů, šifrovaný payload a jednoduchý rate limiting."
problem: "Menší komunitní akce potřebují být dohledatelné, ale ne vždy chtějí veřejně vystavit přesnou lokaci a instrukce."
solution: "Veřejná část ukazuje jen bezpečný kontext akce. Citlivější instrukce se odemykají kódem, který je uložený odděleně od šifrovaného payloadu."
impact: "Projekt působí jako reálný MVP produkt: má jasný use case, produkční nasazení, admin flow a konkrétní bezpečnostní trade-offy."
highlights:
  - "Astro SSR aplikace nasazená na Netlify"
  - "PostgreSQL databáze přes Supabase a Drizzle ORM"
  - "scrypt pro hashování kódů a AES-256-GCM pro citlivý payload"
  - "Zod validace a jednoduchý rate limiting unlock endpointu"
proof: "Ukazuje schopnost postavit produkt, který řeší konkrétní problém, a zároveň přemýšlet o soukromí, backendu i frontendové atmosféře."
stack:
  - Astro
  - TypeScript
  - Supabase
  - Drizzle ORM
  - PostgreSQL
  - Crypto
role: "Koncept, UI, backend, databáze, šifrování, nasazení"
featured: true
year: 2026
status: "V aktivním vývoji"
github: "https://github.com/AgoraPool/RaveMap"
demo: "https://kamnarave.netlify.app"
order: 1
tags:
  - web app
  - encryption
  - music
---

## Kontext

Kam na Rave vzniklo jako produktový experiment nad jednoduchou otázkou: jak publikovat undergroundové akce online, aniž by web rovnou odhaloval všechno všem. Běžné eventové platformy jsou postavené hlavně na dosahu a maximální viditelnosti, ale u menších komunitních akcí je často důležitější pracovat s důvěrou, soukromím a kontrolou nad tím, kdo uvidí přesnou lokaci.

Cílem nebylo vytvořit další generický katalog akcí, ale malý nasazený MVP produkt s jasnou logikou. Veřejná část má pomoci s objevováním akcí a základní orientací. Neveřejná část slouží pro přesnější instrukce, které se odemykají až pomocí kódu od organizátora.

## Přístup

Projekt jsem navrhl jako Astro SSR aplikaci nasazenou na Netlify, s PostgreSQL databází a Drizzle ORM. Klíčové rozhodnutí bylo oddělit veřejná data od neveřejných. Informace, které mohou být veřejně dostupné, se ukládají zvlášť od tajného payloadu s přesnou lokací a doplňujícími instrukcemi.

Neveřejná část se neukládá v plaintextu. Odemykací kód se hashue pomocí `scrypt` a citlivý payload se šifruje pomocí `AES-256-GCM`. Unlock endpoint navíc obsahuje validaci přes Zod a jednoduchý rate limiting podle akce a hashované IP adresy, aby nebylo možné kódy snadno zkoušet hrubou silou.

Vedle backendu jsem řešil i vizuální identitu projektu. Homepage a detail akcí mají záměrně syrovější, autorský styl, který podporuje atmosféru projektu a odlišuje ho od běžných šablonových event webů. Součástí MVP je i jednoduchý admin flow pro zakládání akcí a publikaci obsahu.

## Výsledek

Výsledkem je funkční a nasazený MVP produkt, který ověřuje konkrétní use case: jak spojit event discovery s omezeným přístupem k citlivým informacím. Projekt dobře reprezentuje můj přístup k práci, protože není postavený jen jako technické cvičení, ale jako reálný produktový experiment s jasným trade-offem mezi použitelností a soukromím.

Projekt ukazuje několik věcí najednou: schopnost navrhnout vlastní koncept, vytvořit výrazný frontend, postavit bezpečnější backend a celý produkt dotáhnout do produkčního nasazení. Zároveň zůstává otevřený dalšímu rozvoji, například směrem k lepší správě organizátorů, jemnějším oprávněním nebo robustnějšímu auditování.
