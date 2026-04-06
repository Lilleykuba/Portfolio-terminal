export type SkillLevel = "silne" | "prakticky" | "rozvijim";

export type SkillGroup = {
  title: string;
  description: string;
  items: {
    name: string;
    level: SkillLevel;
    note: string;
  }[];
};

export const levelLabels: Record<SkillLevel, string> = {
  silne: "Silná orientace",
  prakticky: "Praktická znalost",
  rozvijim: "Aktivně rozvíjím",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Webový základ",
    description: "Technologie, na kterých stojí můj hlavní směr.",
    items: [
      {
        name: "HTML",
        level: "silne",
        note: "sémantika, struktura a čistý základ rozhraní",
      },
      {
        name: "CSS",
        level: "silne",
        note: "layout, responzivita a vizuální disciplína",
      },
      {
        name: "JavaScript",
        level: "prakticky",
        note: "interaktivita, komponentová logika a menší utility",
      },
      {
        name: "React",
        level: "prakticky",
        note: "komponenty a opakovaně použitelné UI",
      },
      {
        name: "Astro",
        level: "prakticky",
        note: "rychlé obsahové weby a statické doručování",
      },
    ],
  },
  {
    title: "Tooling a rozvoj",
    description: "Nástroje, které rozšiřují můj technický rozsah.",
    items: [
      {
        name: "Node.js",
        level: "rozvijim",
        note: "server-side základy a jednoduché utility",
      },
      {
        name: "Python",
        level: "prakticky",
        note: "skriptování a rychlé prototypy",
      },
      {
        name: "TypeScript",
        level: "rozvijim",
        note: "typová disciplína pro čitelnější kód",
      },
      {
        name: "Git",
        level: "prakticky",
        note: "běžná práce s verzováním",
      },
      {
        name: "Rust",
        level: "rozvijim",
        note: "memory-safe backend",
      },
    ],
  },
  {
    title: "HRIT, cybersecurity a systémy",
    description: "Pracovní kontext, který dává profilu praktickou oporu.",
    items: [
      {
        name: "SAP SuccessFactors",
        level: "prakticky",
        note: "aktuální profesní zaměření - ownership Comp, LMS, EC modulů",
      },
      {
        name: "Cybersecurity mindset",
        level: "rozvijim",
        note: "základy web security a bezpečnostního uvažování",
      },
      {
        name: "Procesní logika",
        level: "silne",
        note: "struktura informací a orientace v procesech",
      },
      {
        name: "Analytické myšlení",
        level: "silne",
        note: "rozklad problému, argumentace a práce s kontextem",
      },
    ],
  },
];
