const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const template = path.resolve('src/templates/blog-template/index.js')

    const result = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                author
                date
                title
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.map(edge => {
        createPage({
            path: edge.node.frontmatter.path,
            component: template
        })
    })
}