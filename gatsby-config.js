module.exports = {
  siteMetadata: {
    title: 'We Are Going Racing',
    description: 'An iRacing league'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-155010640-1'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-theme-documentation'
  ]
};
