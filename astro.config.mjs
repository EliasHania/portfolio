import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: {
    base: 'https://eliashania.github.io/portfolio/', // Reemplaza con la URL de tu GitHub Pages
  },
  output: 'static', // Asegúrate de que la salida sea estática
});
