import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jurnal Development & Insight',
  tagline: 'Sarangkamarang is back bro, now we shared for you and improve it!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aspsptyd.github.io',
  trailingSlash: false,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/journal-sarangkamarang/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aspsptyd', // Usually your GitHub org/user name.
  projectName: 'journal-sarangkamarang', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/aspsptyd/journal-sarangkamarang/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/aspsptyd/journal-sarangkamarang/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jurnal Sarangkamarang',
      logo: {
        alt: 'Jurnal Development Sarangkamarang',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Jurnal Develop',
        },
        {to: '/blog', label: 'Postingan', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Jurnal Sarangkamarang, All right reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
