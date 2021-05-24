module.exports = {
  siteMetadata: {
    title: `Zac Remboldt - Designer // Developer`,
    description: `The personal landing page of Zac Remboldt – Designer // Developer`,
    author: `Zac Remboldt`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    'gatsby-plugin-sass'
  ],
};
