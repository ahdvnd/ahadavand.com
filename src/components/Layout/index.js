import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import "../../styles/style.less"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <Helmet title={data.site.siteMetadata.title} />
      <Helmet meta={[{ name: "viewport", content: "width=device-width" }]} />
      <Helmet script={[{ src: require("file-loader!rembased/js/rembased_class") }]} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap&subset=latin-ext"
          rel="stylesheet"
        ></link>
        <script src="https://use.fontawesome.com/7beea9e065.js"></script>
      </Helmet>

      <Header />
      {children}
      <Footer />
    </main>
  )
}
