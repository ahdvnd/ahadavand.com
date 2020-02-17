import React from "react"
import { graphql } from "gatsby"
import Resume from "../components/Resume"
import Layout from "../components/Layout"

export default function({ data }) {
  const resume = data.allMarkdownRemark.group.sort((a, b) => (a.fieldValue > b.fieldValue ? 1 : -1))

  return (
    <Layout>
      <Resume resume={resume} />
    </Layout>
  )
}

export const query = graphql`
  query Resume {
    allMarkdownRemark(sort: { fields: fields___index }) {
      group(field: fields___categoryIndex) {
        fieldValue
        nodes {
          fields {
            title
            category
          }
          frontmatter {
            link
          }
          html
        }
      }
    }
  }
`
