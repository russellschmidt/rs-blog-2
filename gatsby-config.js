module.exports = {
  siteMetadata: {
    title: `rusli.io, Russell Schmidt's portfolio`,
    author: `Russell Schmidt`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages` //,
      } //,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-65699622-1` //,
      } //
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp` //,
  ] //
};
