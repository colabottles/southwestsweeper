import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://southwestsweeper.netlify.app",
  output: "static",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
