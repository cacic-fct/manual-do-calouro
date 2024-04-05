import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

import { environment } from "/src/environments/environment";

// https://astro.build/config
export default defineConfig({
  base: environment.basePath,
  integrations: [
    starlight({
      title: "Manual do calouro",
      logo: {
        dark: "./src/assets/cacic/icon-white.svg",
        light: "./src/assets/cacic/icon-color.svg",
      },
      favicon: "./favicon.png",
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
          label: "Auxílios e bolsas",
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
        {
          label: "Página do calouro",
          link: "/pagina-do-calouro",
        },
        {
          label: "Contato das entidades",
          link: "/contatos",
        },
        {
          label: "Sobre o manual",
          link: "/sobre",
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: true,
    }),
    icon(),
  ],
});
