/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

let slug = require("slug")
import { Actions, Node } from "gatsby"

exports.onCreateNode = ({
  node,
  actions,
}: {
  node: Node
  actions: Actions
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `UkranianWritersCsv`) {
    createNodeField({
      node,
      name: "slug",
      value: slug(node["first-name-and-last-name"]),
    })
  }
}
