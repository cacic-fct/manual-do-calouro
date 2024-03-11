import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/manual-do-calouro",
  integrations: [
    starlight({
      title: "Manual do Calouro",
      logo: {
        dark: "./src/assets/cacic/icon-white.svg",
        light: "./src/assets/cacic/icon-color.svg",
      },
      defaultLocale: "pt-BR",
      locales: {
        root: {
          label: "Português",
          lang: "pt-BR",
        },
      },

      editLink: {
        baseUrl: "https://github.com/cacic-fct/manual-do-calouro/edit/main/",
      },

      social: {
        github: "https://github.com/cacic-fct/manual-do-calouro",
      },
      sidebar: [
        {
          label: "Introdução",
          link: "/",
        },
        {
          label: "A FCT-Unesp",
          autogenerate: {
            directory: "fct",
          },
        },
        {
          label: "Auxílios e Bolsas",
          autogenerate: {
            directory: "auxilios-bolsas",
          },
        },

        {
          label: "Presidente Prudente",
          autogenerate: {
            directory: "presidente-prudente",
          },
        },
        {
          label: "Glossário",
          link: "/glossario",
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react({ experimentalReactChildren: true }),
  ],
});
