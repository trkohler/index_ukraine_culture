/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { graphql } = require('gatsby')
const { resolve } = require('path/posix')


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, reporter }) => {
  // const { createPage } = actions

  // const result = graphql`
  //   query createProfiles {
  //     allUkranianWritersCsv {
  //       nodes {
  //         id
  //       }
  //     }
  //   }
  // `

  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  // let ids = result.data.allUkranianWritersCsv.nodes;

  // ids.forEach((profile_id) => {
  //   const template = `src/queries/profile.tsx`;
  //   console.log(profile_id);
  //   createPage({
  //     path: `/profile/${profile_id}`,
  //     component: resolve(template),
  //     context: { profile_id }
  //   });
  // });
}
