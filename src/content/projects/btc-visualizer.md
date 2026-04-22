---
category: "personal"
title: "BTC-Visualizer"
summary: "Dashboard, který převádí veřejná Bitcoin data do přehledné analytické aplikace."
description: "Aplikace kombinuje tržní, síťové a emisní metriky Bitcoinu do několika kurátorovaných pohledů. Důraz je na čitelnost, práci s veřejnými API, transformaci dat, graceful degradation a Astro architekturu s minimem klientského JavaScriptu."
proof: "Ukazuje produktové uvažování, práci s veřejnými daty, datovou vizualizaci, čistou frontend architekturu a schopnost postavit malý, ale přesvědčivý open-source projekt."
stack:
  - Astro
  - TypeScript
  - Tailwind CSS
  - React Islands
  - Recharts
  - Zod
role: "Product design, frontend development, data integration, UI architecture"
featured: true
year: 2026
status: "V aktivním vývoji"
github: "https://github.com/Lilleykuba/BTC-Visualizer"
demo: "https://btc-visualizer.netlify.app"
order: 5
tags:
  - web app
  - data visualization
  - bitcoin
  - dashboard
  - open source
---

## Kontext

BTC-Visualizer vznikl jako kompaktní analytická aplikace, která měla z veřejných Bitcoin dat udělat přehledný a srozumitelný produkt. Cílem nebylo ukázat co nejvíc metrik najednou, ale vybrat několik pohledů, které dávají smysl i bez hlubší znalosti trhu: cenu, cykly halvingu, stav sítě, poplatky a postupující vzácnost nabídky.

Záměrně jsem se vyhnul dojmu trading terminálu nebo přeplácané crypto aplikace. Projekt měl působit klidně, čitelně a profesionálně, aby vyniklo produktové uvažování, práce s informační hierarchií a schopnost vybrat jen několik silných pohledů místo desítek průměrných metrik.

## Přístup

Architekturu jsem postavil Astro-first. Stránka se renderuje na serveru, zatímco React používám jen jako malé islands pro interaktivní grafy. Díky tomu zůstává aplikace lehká a zároveň ukazuje, že umím zvolit technologii podle potřeby, ne zvyku.

Datová vrstva je oddělená od UI. Veřejné zdroje jsou zabalené do samostatných adapterů, validované pomocí Zodu a skládají se do jednoho dashboard payloadu. Projekt pracuje s veřejnými, ideálně registrace-free zdroji a u síťových metrik využívá i open-source ekosystém kolem mempool.space. Součástí návrhu byly i fallback stavy, partial-data handling a krátká cache, aby aplikace zůstala použitelná i při výpadku části externích dat.

Na úrovni produktu jsem zvolil jen několik sekcí: market snapshot, hlavní price chart s timeframe přepínačem, halving timeline, network pulse, scarcity view a drawdown analýzu. Každá sekce proto neukazuje jen syrová data, ale i krátké vysvětlení, proč daná metrika stojí za pozornost.

## Výsledek

Výsledkem je malý, ale promyšlený open-source dashboard s důrazem na čitelnost, stabilní datový tok a klidný vizuální jazyk. Projekt ukazuje schopnost navrhnout rozumnou informační hierarchii, modelovat externí data, vybudovat udržitelnou strukturu frontendu a převést technické metriky do formy, která je srozumitelná i mimo úzkou crypto komunitu.

Nejde o maximalizaci počtu funkcí, ale o správně zvolený rozsah, čistý kód a realistickou implementaci nad veřejnými zdroji.
