import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

import { environment } from "/src/environments/environment";

import starlightDocSearch from "@cacic-fct/starlight-typesense-docsearch";

// https://astro.build/config
export default defineConfig({
  base: environment.basePath,
  integrations: [
    starlight({
      title: "Manual do calouro",
      logo: {
        dark: "./src/assets/cacic/logo-white.svg",
        light: "./src/assets/cacic/logo-color.svg",
      },
      favicon: "./favicon.png",
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

      plugins: [
        starlightDocSearch({
          typesenseCollectionName: "fct-app-docs",
          typesenseServerConfig: {
            nodes: [
              {
                host: "typesense.fctapp.yudi.me",
                port: 443,
                protocol: "https",
              },
            ],
            apiKey: "XDqPffmOQDuPsoqF9ZvXk4lJYMYW6Oj9",
          },
          typesenseSearchParameters: {},
        }),
      ],
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
