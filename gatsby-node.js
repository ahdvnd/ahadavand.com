const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    if (fileNode.sourceInstanceName !== "resume") {
      return
    }

    const parsedFilePath = path.parse(fileNode.relativePath)
    const splittedDir = parsedFilePath.dir.split("/")

    const splitedFolderName = splittedDir[splittedDir.length - 1].split(".")
    const categoryIndex = Number(splitedFolderName[0]) || 0
    const category = splitedFolderName.slice(1).join(".")

    const splitedFileName = parsedFilePath.name.split(".")
    const index = Number(splitedFileName[0]) || 0
    const title = splitedFileName.slice(1).join(".")

    createNodeField({ node, name: `index`, value: index })
    createNodeField({ node, name: `categoryIndex`, value: categoryIndex })
    createNodeField({ node, name: `category`, value: category })
    createNodeField({ node, name: `title`, value: title })
  }
}
