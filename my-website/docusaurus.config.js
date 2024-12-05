// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {

    baseUrl: 'TollRoads', // Базовый url, обычно название репозитория
    organizationName: 'zaikinaann', // Имя GitHub пользователя
    projectName: 'TollRoads', // Имя репозитория
    onBrokenLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
    onBrokenMarkdownLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
    
    title: 'Платные дороги', //Название сайта на начальной странице
    tagline: 'Техническая документация продукта', // Описание сайта на начальной странице
    favicon: 'img/road.ico', // Иконка сайта

    // Set the production url of your site here
    url: 'https://zaikinaann.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: 'toll-roads', // Базовый url, обычно название репозитория

    // GitHub pages deployment config.
    organizationName: 'zaikinaann', // Usually your GitHub org/user name.
    projectName: 'toll-roads', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  //подключаем плагин для drawio
  plugins: [
    ['drawio', {}]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zaikinaann/toll-roads',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zaikinaann/toll-roads',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
      ],
      // подключаем плагин для OPENAPI
      [
        'redocusaurus',
         {
           specs: [
                 {
                    id: 'api',
                    spec: 'api_specs/openapi.yaml',
                 },
             ],
             theme: {
                primaryColor: '#1890ff',
             },
         }
      ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Toll Roads',
        logo: {
          alt: 'My Site Logo',
          src: 'img/road.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/zaikinaann/toll-roads',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zaikinaann/toll-roads',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
