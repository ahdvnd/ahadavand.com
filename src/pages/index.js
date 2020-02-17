import React from "react"
import { graphql } from "gatsby"
import Resume from "../components/Resume"
import Layout from "../components/Layout"

export default function({ data }) {
  const resume = data.allMarkdownRemark.group

  return (
    <Layout>
      <Resume resume={resume} />
    </Layout>
  )
}

export const query = graphql`
  query Resume {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        nodes {
          frontmatter {
            category
            link
            title
          }
          html
        }
        fieldValue
      }
    }
  }
`
