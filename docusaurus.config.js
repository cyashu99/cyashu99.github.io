// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yashika Chaudhary',
  tagline: 'Senior Product Engineer, Distributed Systems | IIT BHU',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cyashu99.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, use '/' for user/organization pages
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cyashu99', // Usually your GitHub org/user name.
  projectName: 'github-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl:
            'https://github.com/cyashu99/github-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cyashu99/github-website/tree/main/',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Yashika Chaudhary',
        logo: {
          alt: 'Yashika Chaudhary Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://linkedin.com/in/yashika-chaudhary1999',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/yashika-chaudhary1999',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'About',
                to: '/docs/intro',
              },
              {
                label: 'Experience',
                to: '/docs/experience',
              },
              {
                label: 'Projects',
                to: '/docs/projects',
              },
              {
                label: 'Skills',
                to: '/docs/skills',
              },
            ],
          },
          {
            title: 'Professional',
            items: [
              {
                label: 'Sprinklr',
                href: 'https://www.sprinklr.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/yashika-chaudhary1999',
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
                href: 'https://github.com/yashika-chaudhary1999',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yashika Chaudhary. Senior Product Engineer at Sprinklr. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
