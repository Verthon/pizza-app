const path = require("path")
require("dotenv").config({ path: "./env.local" })

console.log(process.env.SANITY_TOKEN, process.env)

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
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "@/layouts": path.join(__dirname, "src/layouts"),
        "@/templates": path.join(__dirname, "src/templates"),
        "@/atoms": path.join(__dirname, "src/components/atoms"),
        "@/molecules": path.join(__dirname, "src/components/molecules"),
        "@/organisms": path.join(__dirname, "src/components/organisms"),
        "@/icons": path.join(__dirname, "src/components/icons"),
        "@/pages": path.join(__dirname, 'src/pages'),
        "@/hooks": path.join(__dirname, "src/hooks"),
        "@/reducers": path.join(__dirname, 'src/reducers'),
        "@/store": path.join(__dirname, "src/store"),
        "@/theme": path.join(__dirname, 'src/theme'),
        "@/shared": path.join(__dirname, 'src/shared'),
        "@/utils": path.join(__dirname, 'src/utils'),
      }
    },
  ],
}
