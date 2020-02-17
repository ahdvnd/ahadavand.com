module.exports = {
  siteMetadata: {
    title: "Aboozar hadavand",
    description: "All my resume in one page",
    siteUrl: "https://ahadavand.com",
    githubRepo: "https://github.com/Eddie-CooRo/ahadavand.com",
    mail: "mailto:info@pravdomil.com",
    twitter: "https://twitter.com/pravdomil",
    github: "https://github.com/pravdomil",
    paypal:
      "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=pravdomil.com%20Beer",
    stackoverflow: "https://stackoverflow.com/users/3748498/pravdomil",
    youtube: "https://youtube.com/pravdomil",
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
