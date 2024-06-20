import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

import { environment } from "/src/environments/environment";

import starlightDocSearch from "@cacic-fct/starlight-typesense-docsearch";

import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  base: environment.basePath,
  site: "manual.cacic.dev.br",
  integrations: [
    starlight({
      title: "Manual do calouro",
      logo: {
        dark: "./src/assets/cacic/logo-white.svg",
        light: "./src/assets/cacic/logo-color.svg",
      },
      favicon: "./favicon.png",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "description",
            content:
              'O "manual do calouro" apresenta a FCT-Unesp e a cidade de Presidente Prudente para os novos ingressantes aprovados no vestibular da Vunesp. Estão reunidas as informações que o calouro precisa saber para entender seus novos espaços e aproveitar tudo que oferecem.',
          },
        },
      ],

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
            directory: "A FCT-Unesp",
          },
        },
        {
          label: "Auxílios e bolsas",
          autogenerate: {
            directory: "Auxílios e bolsas",
          },
        },
        {
          label: "Presidente Prudente",
          autogenerate: {
            directory: "Presidente Prudente",
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
          label: "Contatos das entidades",
          link: "/contatos-das-entidades",
        },
        {
          label: "Sobre o manual",
          link: "/sobre",
        },
      ],
      customCss: ["./src/tailwind.css"],

      plugins: [
        starlightDocSearch({
          typesenseCollectionName: "manual-do-calouro",
          typesenseServerConfig: {
            nodes: [
              {
                host: "typesense.cacic.dev.br",
                port: 443,
                protocol: "https",
              },
            ],
            apiKey: "XDqPffmOQDuPsoqF9ZvXk4lJYMYW6Oj9",
          },
          typesenseSearchParameters: {},
        }),
        starlightLinksValidator(),
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
