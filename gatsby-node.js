const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulRecipePost (limit:100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulRecipePost.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })

    )
  })
}
