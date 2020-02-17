import React from "react"
import Spacer from "./Spacer"

export default function Resume({ resume }) {
  return (
    <div className="topics">
      {resume.map(({ fieldValue: category, nodes: entries }, i) => (
        <div className="topic" key={i} id={category}>
          <Spacer height={6} />
          <h1>{category}</h1>
          <Spacer height={2} />
          <ul>
            {entries.map(({ frontmatter: { link, title }, html }, i) => (
              <li key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span className="title">{title}</span>
                  <Spacer height={0.5} />
                  <span className="desc" dangerouslySetInnerHTML={{ __html: html }}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
