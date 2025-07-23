// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // Includes parent categories path in search result
        includeParentCategoriesInPageTitle: false,

        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,
      },
    ],
  ],

  title: 'IBM Spyre AIU SDK',
  tagline: 'Welcome to the IBM Spyre AIU SDK!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pages.github.ibm.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // baseUrl: '/ai-foundation/aiu-sdk-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ai-foundation', // Usually your GitHub org/user name.
  projectName: 'aiu-sdk-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // tell router to turn off blog functions
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/aiu-sdk-banner.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'IBM Spyre SDK Logo',
          src: 'img/aiu-sdk-logo-small.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'SDK Documentation',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.ibm.com/ai-foundation/aiu-sdk',
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
                label: 'Overview',
                to: '/docs/overview/aiu-sdk-overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.ibm.com/ai-foundation/aiu-sdk',
              },
              {
                label: 'Slack:', //  #aiu-applications-squad
                href: 'https://ibm.enterprise.slack.com/archives/C06UM672DJ8',
              },
            ],
          },
          {
            title: 'IBM Spyre',
            items: [
              {
                label: 'Spyre Accelerator',
                href: 'https://research.ibm.com/blog/spyre-for-z',
              },
              {
                label: 'Model roadmap',
                href: 'https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx'
              },
            ],
          },
          {
            title: 'AI @ IBM',
            items: [
              {
                label: 'IBM Research',
                href: 'https://research.ibm.com/',
              },
              {
                label: 'IBM AI Ethics',
                href: 'https://www.ibm.com/impact/ai-ethics',
              },
              {
                label: 'IBM Data & Model Factory',
                href: 'https://dmf.cash.sl.cloud9.ibm.com/home',
              },
              {
                label: 'IBM Granite Models',
                href: 'https://www.ibm.com/granite',
              },
              {
                label: 'IBM Granite Playground',
                href: 'https://www.ibm.com/granite/playground/code/',
              },
            ],
          },
          {
            title: 'Hugging Face',
            items: [
              {
                label: 'IBM Granite',
                href: 'https://huggingface.co/ibm-granite',
              },
              {
                label: 'IBM NASA Geospatial',
                href: 'https://huggingface.co/ibm-nasa-geospatial',
              },
              {
                label: 'Deepset',
                href: 'https://huggingface.co/deepset',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //   ],
          // },
        ],
        copyright: `© Copyright IBM Corporation ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
