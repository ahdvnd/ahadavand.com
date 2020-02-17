import React from "react"
import Spacer from "./Spacer"

export default function Resume({ resume }) {
  console.log(resume)
  return (
    <div className="topics">
      {resume.map(({ fieldValue: category, nodes: entries }, i) => (
        <div className="topic" key={i} id={category}>
          <Spacer height={6} />
          <h1>{category}</h1>
          <Spacer height={2} />
          <ul>
            {entries.map(({ frontmatter: { link }, fields: { title }, html }, i) => {
              const entryJSX = (
                <>
                  <span className="title">{title}</span>
                  <Spacer height={0.5} />
                  <span className="desc" dangerouslySetInnerHTML={{ __html: html }}></span>
                </>
              )
              return (
                <li key={i}>
                  {link ? (
                    <a className="entry" href={link} target="_blank" rel="noopener noreferrer">
                      {entryJSX}
                    </a>
                  ) : (
                    <span className="entry">{entryJSX}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
