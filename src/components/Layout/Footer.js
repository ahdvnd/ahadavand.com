import React from "react"
import Spacer from "../Spacer"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubRepo
        }
      }
    }
  `)
  return (
    <footer>
      <Spacer height={16} />
      <div className="links">
        <a href="https://github.com/ahdvnd/ahadavand.com">© aboozar hadavand</a>
        <a href="https://github.com/pravdomil">Made by @pravdomil</a>
        <a href="https://github.com/Eddie-CooRo">& @eddie</a>
        <a href="https://gatsbyjs.org">Based on Gatsby</a>
        <a href="https://netlify.com">Build & Served by Netlify</a>
      </div>
      <Spacer height={1} />
    </footer>
  )
}
