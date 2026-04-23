import { getCollection } from "astro:content";

export const projectCategoryOrder = ["freelance", "work", "personal"] as const;

export const projectCategoryMeta = {
  freelance: {
    label: "Klientský projekt",
    title: "Klientské projekty",
    description:
      "Zakázkové weby, landing pages a menší klientské projekty se zaměřením na přehlednost, výkon a čisté provedení.",
  },
  work: {
    label: "Pracovní",
    title: "Pracovní a HRIT projekty",
    description:
      "Projekty a koncepty vycházející z pracovního nebo enterprise kontextu, kde je důležitá struktura, proces a přesnost.",
  },
  personal: {
    label: "Osobní",
    title: "Osobní a studijní projekty",
    description:
      "Vlastní projekty, na kterých rozvíjím bezpečnostní myšlení, systémový základ, práci s daty a webovou implementaci.",
  },
} as const;

export async function getProjects() {
  const projects = await getCollection("projects");

  return projects.sort((left, right) => {
    if (left.data.order !== right.data.order) {
      return left.data.order - right.data.order;
    }

    return right.data.year - left.data.year;
  });
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.data.featured);
}

export async function getProjectsGroupedByCategory() {
  const projects = await getProjects();

  return projectCategoryOrder
    .map((category) => ({
      category,
      meta: projectCategoryMeta[category],
      projects: projects.filter(
        (project) => project.data.category === category,
      ),
    }))
    .filter((group) => group.projects.length > 0);
}
