const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const template = path.resolve('src/templates/blog-template/index.js')

    const { data: { allMarkdownRemark: { edges }}} = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)
    edges.map(edge => {
        createPage({
            path: edge.node.frontmatter.path,
            component: template
        })
    })
}