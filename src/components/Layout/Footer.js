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
        <a href={site.siteMetadata.githubRepo}>Edit this page</a>
        <a href="https://gatsbyjs.org">Made with Gatsby</a>
        <a href="https://netlify.com">Build and Served by Netlify</a>
      </div>
      <Spacer height={1} />
    </footer>
  )
}
