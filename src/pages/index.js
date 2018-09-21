import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from '../components/buttonprimary'
import Jumbotron from '../components/jumbotron'
import Header from '../components/header'
import { rhythm } from '../utils/typography'

const RecentPostsArea = styled.div`
  background-color: white;
  border-top: 1px solid #F7D3CB;
  border-bottom: 1px solid #F7D3CB;
`

const RestofPostsArea = styled.div``

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Post = styled.div`
  margin-left: 3rem;
  position: relative;
  width: 23%;
`

const PostTitle = styled.h3`
  border-top: 4px solid black;
  line-height: 4rem;
  margin-bottom: 0;
`

const PostDate = styled.small`
  left: -3rem;
  letter-spacing: 1px;
  position: absolute;
  text-transform: uppercase;
  top: 14px;
  transform: rotate(-90deg);
`

const PostLink = styled(Link)`
  color: #4056A1;
  text-decoration: none;
`

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
        <RecentPostsArea>
          <ContentWrapper>
            <Header
              text="Recent Creations"
              position="center"
            />
            {recentPosts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <Post key={node.fields.slug}>
                  <PostTitle>{title}</PostTitle>
                  <PostDate>{node.frontmatter.date}</PostDate>
                  <PostLink to={node.fields.slug}>
                    Get Recipe
                  </PostLink>
                </Post>
              )
            })}
            </ContentWrapper>
            <ContentWrapper></ContentWrapper>
          </RecentPostsArea>
          <RestofPostsArea>
            <div>
            {restPosts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <Post key={node.fields.slug}>
                  <PostTitle>{title}</PostTitle>
                  <PostDate>{node.frontmatter.date}</PostDate>
                  <PostLink to={node.fields.slug}>
                    Get Recipe
                  </PostLink>
                </Post>
              )
            })}
            </div>
          </RestofPostsArea>
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
            date(formatString: "MMMM DD, YYYY")
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
            date(formatString: "MMMM DD")
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
            date(formatString: "MMMM DD")
            title
          }
        }
      }
    }
  }
`
