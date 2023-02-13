/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

let slug = require("slug")
import { Actions, Node } from "gatsby"
import path from "path"

exports.onCreateNode = ({
  node,
  actions,
}: {
  node: Node
  actions: Actions
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `CreatorsCsv`) {
    createNodeField({
      node,
      name: "slug",
      value: slug(node["first-name-and-last-name"]),
    })
    if (node.citations) {
      createNodeField({
        node,
        name: "citations_m",
        value: node.citations.split("\n"),
      })
    }
    if (node.example_art) {
      createNodeField({
        node,
        name: "example_art_m",
        value: (node.example_art as string).split(";"),
      })
    }
  }
}

exports.createPages = async ({
  actions,
  graphql,
}: {
  actions: Actions
  graphql: CallableFunction
}) => {
  const { data } = await graphql(`
    query {
      creators: allCreatorsCsv {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  for (let index = 0; index < data.creators.nodes.length; index++) {
    const { id, fields } = data.creators.nodes[index]

    actions.createPage({
      path: `/profile/${fields.slug}`,
      component: path.resolve(`src/templates/profile/ProfileTemplate.tsx`),
      context: { glob: `*${fields.slug}*`, id },
    })
  }
}
