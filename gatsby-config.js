module.exports = {
  siteMetadata: {
    title: 'Clayton Phillips-Dorsett',
    description: 'Professional site for Clayton Phillips-Dorsett',
    author: 'Clayton Phillips-Dorsett'
  },
  plugins: [
    'gatsby-plugin-ts',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Professional site for Clayton Phillips-Dorsett',
        short_name: 'CPD professional site',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
