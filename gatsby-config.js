module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/portfolio",
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/placeholder-icon.jpg"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `projects`,
      path: `${__dirname}/src/content/projects`,
    },
    __key: "projects"
  },]
};