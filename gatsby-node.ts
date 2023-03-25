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
      let citations = node.citations.split(";").map(citation => citation.trim())
      createNodeField({
        node,
        name: "citations_m",
        value: citations,
      })
    }
    let pieces = null
    if (node["most-famous-pieces"]) {
      pieces = node["most-famous-pieces"]
        .split(";")
        .map(piece => piece.trim())
        .filter(piece => piece.length > 1)
    }

    createNodeField({
      node,
      name: "most_famous_pieces_m",
      value: pieces,
    })

    if (node.example_art) {
      createNodeField({
        node,
        name: "example_art_m",
        value: (node.example_art as string).split(";"),
      })
    }
  } else if (node.internal.type === `VolunteersJson`) {
    createNodeField({
      node,
      name: "slug",
      value: slug(node["title"]),
    })
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
      volunteers: allVolunteersJson {
        nodes {
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
  // this copy paste is probably ugly but i don't want to waste much time on that
  for (let index = 0; index < data.volunteers.nodes.length; index++) {
    const { fields } = data.volunteers.nodes[index]

    actions.createPage({
      path: `/volunteers/${fields.slug}`,
      component: path.resolve(`src/templates/volunteer/volunteerTemplate.tsx`),
      context: { slug: fields.slug },
    })
  }
}
