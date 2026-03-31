import { defineConfig } from "astro/config";

import { siteMeta } from "./src/data/site";

export default defineConfig({
  site: siteMeta.siteUrl,
});
