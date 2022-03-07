module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/Modules/MWWHELP/',
  onBrokenLinks: 'throw',
  favicon: 'img/Logo.png',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
//    algolia: {
//      apiKey: 'YOUR_API_KEY',
//      indexName: 'YOUR_INDEX_NAME',
//    },
    
    navbar: {
      title: 'Masterworks',
      logo: {
        alt: 'Masterworks',
        src: 'img/Logo.png',
      },
      items: [
      {
          href: '#',
          className: 'forprint',
          // Only one of "to" or "href" should be used
          // href: 'https://www.facebook.com',
          label: 'Print',
          position: 'right',
          //activeBaseRegex: 'docs/(next|v8)',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}. Aurigo Software Technologies Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // In order to display a link to edit your documents, please change this value.
          // Refer to Docusaurus v2 documentation for more info.
          // editUrl: 'http://easydita.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // To enable the local search functionality, uncomment the following code:
    // [require.resolve('@cmfcmf/docusaurus-search-local'), {
    // indexDocs: true,
    //     docsRouteBasePath: '/',
    //     indexDocSidebarParentCategories: 3,
    //     indexPages: false,
    //     language: "en"
    // }]
  ],
};
