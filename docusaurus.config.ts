import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { DocSearchProps, DocSearchTranslations } from 'typesense-docsearch-react';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Manual do calouro',
  tagline: 'Um guia para ingressantes na FCT-Unesp feito pelo CACiC',
  favicon: 'favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: 'https://manual.cacic.dev.br',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cacic-fct', // Usually your GitHub org/user name.
  projectName: 'manual-do-calouro', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/cacic-fct/manual-do-calouro/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: 'https://plsbl.cacic.dev.br/js/script.js',
      defer: true,
      'data-domain': 'manual.cacic.dev.br',
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://plsbl.cacic.dev.br',
      },
    },
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Manual do calouro',
      logo: {
        alt: 'Logo do CACiC',
        src: 'cacic/logo-color.svg',
        srcDark: 'cacic/logo-white.svg',
      },
      items: [
        {
          href: 'https://github.com/cacic-fct/manual-do-calouro',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manual do calouro',
          items: [
            {
              label: 'Início',
              to: '/',
            },
            {
              label: 'Sobre',
              to: '/Sobre',
            },
            {
              label: 'Política de privacidade',
              to: 'https://cacic.dev.br/legal/privacy-policy',
            },
          ],
        },
        {
          title: 'CACiC',
          items: [
            {
              label: 'Site',
              href: 'https://cacic.dev.br',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/cacic.fct',
            },
            {
              label: 'Facebook',
              href: 'https://fb.com/cacic.fct',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@cacic-fct',
            },

            {
              label: 'GitHub',
              href: 'https://github.com/cacic-fct',
            },

            {
              label: 'E-mail',
              href: 'mailto:cacic.fct@gmail.com',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    typesense: {
      typesenseCollectionName: 'manual-do-calouro',
      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense.cacic.dev.br',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: 'LsaEBktA2AE38kU4CWXSPQPqiwIOriiv',
      },

      typesenseSearchParameters: {},

      // @ts-ignore
      contextualSearch: true,

      // Doesn't work
      translations: {} satisfies DocSearchTranslations,
    } satisfies DocSearchProps,
  } satisfies Preset.ThemeConfig,
  plugins: ['./src/plugins/tailwind.js'],
};

export default config;
