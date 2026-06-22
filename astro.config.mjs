import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fuzzy-waddle.pages.dev",
  integrations: [sitemap()],
});
