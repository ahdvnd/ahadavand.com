import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Spacer from "../Spacer"

export default function Header() {
  const {
    site: {
      siteMetadata: { title, description, github, mail, paypal, stackoverflow, twitter, youtube },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          github
          githubRepo
          mail
          paypal
          siteUrl
          stackoverflow
          twitter
          youtube
        }
      }
    }
  `)
  return (
    <header>
      <Spacer height={9} />

      <h2>
        <a href="/">{title}</a>
      </h2>
      <p>
        <span>{description}</span>
        <br />
      </p>

      <Spacer height={3} />

      <div className="links">
        {mail && (
          <a href={mail}>
            <i className="fa fa-envelope" />
          </a>
        )}
        {twitter && (
          <a href={twitter}>
            <i className="fa fa-twitter" />
          </a>
        )}
        {github && (
          <a href={github}>
            <i className="fa fa-github" />
          </a>
        )}
        {paypal && (
          <a href={paypal}>
            <i className="fa fa-paypal" />
          </a>
        )}
        {stackoverflow && (
          <a href={stackoverflow}>
            <i className="fa fa-stack-overflow" />
          </a>
        )}
        {youtube && (
          <a href={youtube}>
            <i className="fa fa-youtube-play" />
          </a>
        )}
      </div>
    </header>
  )
}
