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
          <a href="mailto:info@pravdomil.com">
            <i className="fa fa-envelope" />
          </a>
        )}
        {twitter && (
          <a href="https://twitter.com/pravdomil">
            <i className="fa fa-twitter" />
          </a>
        )}
        {github && (
          <a href="https://github.com/pravdomil">
            <i className="fa fa-github" />
          </a>
        )}
        {paypal && (
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=pravdomil.com%20Beer">
            <i className="fa fa-paypal" />
          </a>
        )}
        {stackoverflow && (
          <a href="https://stackoverflow.com/users/3748498/pravdomil">
            <i className="fa fa-stack-overflow" />
          </a>
        )}
        {youtube && (
          <a href="https://youtube.com/pravdomil">
            <i className="fa fa-youtube-play" />
          </a>
        )}
      </div>
    </header>
  )
}
