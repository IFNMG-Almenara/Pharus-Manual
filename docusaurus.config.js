// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Pharus',
  tagline: 'Um guia de uso completo para o sistema de eventos PHARUS',
  favicon: 'img/iflogo.svg',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Pharus-Manual/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IFNMG-Almenara', // Usually your GitHub org/user name.
  projectName: 'Pharus-Manual', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/banner.png',
      navbar: {
        title: 'PHARUS',
        logo: {
          alt: 'Logo Pharus',
          src: 'img/dark-oficial-pharus-logo.png',
          srcDark: 'img/oficial-pharus-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          // {to: '/help', label: 'Ajuda', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
        items: [
          {
            html: `
            <div class="div-pharus">
              <image src="https://i.ibb.co/njkpMc3/footer-white-pharus-icon.png"/>
              <h2 class="ms-2 me-3">Pharus</h2>
            </div>
            <div>
              <p>
                <strong>Gestão de Enventos</strong>
              </p>
            </div>
              `,
          },
        ],
          },
          {
            items: [
              {
                label: "Outros Eventos",
                to: "https://eventos.ifnmg.edu.br/#eventos",
              },
              {
                label: "Validação de Certificados",
                to: "https://eventos.ifnmg.edu.br/#certificados"
              },
              {
                label: "Área do participante",
                to: "https://eventos.ifnmg.edu.br/area-do-participante/meus-eventos"
              }
            ]
          },
          {
            items: [
              {
                html:`
                <p class="desenvolvido">Desenvolvido pelo IFNMG - Campus Almenara</p>
                `
              },
              {
                label: "pharus@ifnmg.edu.br",
                to: "mailto:pharus@ifnmg.edu.br"
              }
            ]
            
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
