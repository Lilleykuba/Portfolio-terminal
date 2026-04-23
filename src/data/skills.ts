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
    title: "Cybersecurity a systémy",
    description: "Směr, kterému se chci věnovat nejvíc.",
    items: [
      {
        name: "Linux",
        level: "prakticky",
        note: "server, self-hosting a běžná správa prostředí",
      },
      {
        name: "Networking",
        level: "rozvijim",
        note: "DNS, reverse proxy, VPN a základní síťové souvislosti",
      },
      {
        name: "Docker",
        level: "prakticky",
        note: "Docker Compose a provoz menších služeb",
      },
      {
        name: "Web security",
        level: "rozvijim",
        note: "validace, šifrování, rate limiting a práce s citlivými daty",
      },
      {
        name: "Pi-hole / WireGuard",
        level: "prakticky",
        note: "domácí lab a každodenně používané služby",
      },
    ],
  },
  {
    title: "HRIT a analytika",
    description: "Pracovní kontext, který dává profilu praktickou oporu.",
    items: [
      {
        name: "SAP SuccessFactors",
        level: "prakticky",
        note: "aktuální profesní zaměření - ownership Comp, LMS, EC modulů",
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
      {
        name: "Testing koordinace",
        level: "prakticky",
        note: "testování změn s requestory a hypercare po nasazení",
      },
      {
        name: "Risk review",
        level: "prakticky",
        note: "práce se změnami, které musí projít kontrolou před produkcí",
      },
    ],
  },
  {
    title: "Web a tooling",
    description: "Praktický způsob, jak ukazuji technické myšlení.",
    items: [
      {
        name: "Astro",
        level: "prakticky",
        note: "rychlé obsahové weby a statické doručování",
      },
      {
        name: "TypeScript",
        level: "prakticky",
        note: "čitelnější kód a práce s datovými strukturami",
      },
      {
        name: "React",
        level: "prakticky",
        note: "interaktivní části aplikací a komponenty",
      },
      {
        name: "Python",
        level: "prakticky",
        note: "skriptování a rychlé prototypy",
      },
      {
        name: "Git",
        level: "prakticky",
        note: "běžná práce s verzováním",
      },
    ],
  },
];
