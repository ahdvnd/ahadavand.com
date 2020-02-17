module.exports = {
  siteMetadata: {
    title: "Aboozar Hadavand",
    description: "Personal Website",
    siteUrl: "https://ahadavand.com",
    githubRepo: "https://github.com/ahdvnd/ahadavand.com",
    mail: "mailto:ahadavand@minerva.kgi.edu",
    twitter: "https://twitter.com/ahdvnd",
    github: "https://github.com/ahdvnd",
    paypal:
      "",
    stackoverflow: "",
    youtube: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `${__dirname}/resume`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-less",
      options: { relativeUrls: true, cssLoaderOptions: { url: true } },
    },
  ],
}
