import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Manual do Calouro",
  tagline: "FCT–Unesp",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cacic-fct.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/manual-do-calouro",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cacic-fct", // Usually your GitHub org/user name.
  projectName: "manual-do-calouro", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/cacic-fct/manual-do-calouro/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "CACiC",
        src: "cacic/icon-color.svg",
        srcDark: "cacic/icon-white.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "bookSidebar",
          position: "left",
          label: "Manual do calouro",
        },
        { to: "/sobre", label: "Sobre", position: "right" },
        {
          href: "https://github.com/cacic-fct/manual-do-calouro",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Manual do Calouro",
          items: [
            {
              label: "Início",
              to: "/",
            },
          ],
        },
        {
          title: "CACiC",
          items: [
            {
              label: "Homepage",
              href: "https://cacic-fct.web.app",
            },
            {
              label: "FCT App",
              href: "https://fct-pp.web.app",
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 CACiC-FCT.`,
    },

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        },
      ],
    ],

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
