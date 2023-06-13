module.exports = {
  siteMetadata: {
    siteTitle: `Подготовка к собеседыванию на front-end разработчика`,
    defaultTitle: `Подготовка к собеседыванию на front-end разработчика`,
    siteTitleShort: `Front-end`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://www.learn-front-end.ru`,
    siteAuthor: `@annaserba`,
    siteImage: `/banner.png`,
    siteLanguage: `ru`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        homePath: `src/home`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/annaserba/docs`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Front-end`,
        short_name: `Front-end`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
     {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
       trackingId: `G-TG3PHD5RE5`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.learn-front-end.ru`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
