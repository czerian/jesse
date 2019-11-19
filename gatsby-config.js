module.exports = {
  siteMetadata: {
    title: `Jesse Kyalo | Director | Filmmaker`,
    description: `Jesse Kyalo is a Kenyan director and one of the most recognized filmmakers in Africa`,
    author: `bryanczar.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesse Kyalo`,
        short_name: `jessekyalo.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
