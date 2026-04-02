import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    category: z.enum(["freelance", "work", "personal"]),
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    proof: z.string().optional(),
    learning: z.string().optional(),
    nextStep: z.string().optional(),
    stack: z.array(z.string()),
    role: z.string(),
    featured: z.boolean().default(false),
    year: z.number().int(),
    status: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    order: z.number().int().default(999),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects,
};
