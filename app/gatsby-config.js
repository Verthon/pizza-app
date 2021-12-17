require('dotenv').config({ path: "./env.local" })

console.log( process.env.SANITY_TOKEN,  process.env);

module.exports = {
  siteMetadata: {
    title: "pizza-app",
    siteUrl: `https://gatsby-pizza-app.netlify.app/`,
    description: `Small pizzeria with Sanity backend`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "d8yx2txf",
        dataset: `develop`,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image"
  ],
};
