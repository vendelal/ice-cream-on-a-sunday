import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from '../components/buttonprimary'
import Jumbotron from '../components/jumbotron'
import { rhythm } from '../utils/typography'

class HomePage extends React.Component {
  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const firstPost = get(this, 'props.data.firstPost.edges[0].node')
    const recentPosts = get(this, 'props.data.recentPosts.edges')
    const restPosts = get(this, 'props.data.restPosts.edges')

    return (
      <div>
        <Jumbotron
          title={firstPost.frontmatter.title}
          date={firstPost.frontmatter.date}
          excerpt={firstPost.excerpt}
          slug={firstPost.fields.slug}
        />
        <div>
          {recentPosts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <small>{node.frontmatter.date}</small>
                <h3>{title}</h3>
                <ButtonPrimary
                  text="Get Recipe"
                  destination={node.fields.slug}
                  />
              </div>
            )
          })}
          </div>
          <div>
          {restPosts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <small>{node.frontmatter.date}</small>
                <h3>{title}</h3>
                <ButtonPrimary
                  text="Get Recipe"
                  destination={node.fields.slug}
                  >
                </ButtonPrimary>
              </div>
            )
          })}
          </div>
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    firstPost: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    recentPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, skip: 1, limit: 3) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    restPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, skip: 4, limit: 4) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
