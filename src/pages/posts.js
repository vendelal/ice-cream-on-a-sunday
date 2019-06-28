import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import ArticleLinkWithVisual from '../components/ArticleLinkWithVisual'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'


const AllPostsPageWrapper = styled.main`
  background-color: ${Colors.pageBackground};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const AllPostsTitleArea = styled.header`
  border-top: ${Sizes.borderThick} solid ${Colors.textColor};
  margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium};
  max-width: ${Sizes.contentWidth};
  padding: ${Spacing.spacingMedium} 0;
  position: relative;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium} 0;
    padding: ${Spacing.spacingBase} 0 0;
    width: 100%;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    margin: ${Spacing.spacingXLarge} auto 0;
    width: 100%;
  }
`

const AllPostsWrapper = styled.ul`
  display: grid;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    grid-gap: ${Spacing.spacingBase};
  }
`

class BlogIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allPosts.edges')
    //    const title = get(node, 'frontmatter.title') || node.fields.slug return

    //{posts.map(({ node }) => {
    //key={node.fields.slug} to={node.fields.slug}

    return (
      <AllPostsPageWrapper>
        <AllPostsTitleArea>
          <h1>All the recipes!</h1>
        </AllPostsTitleArea>
        <AllPostsWrapper>
          {posts.map(post => (
            <ArticleLinkWithVisual
              post={post.node}
              imageUrl={post.node.illustrationCombined.file.url}
              slug={post.node.slug}
            />
          ))}
        </AllPostsWrapper>
      </AllPostsPageWrapper>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query AllPostsQuery {
    allPosts: allContentfulRecipePost(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          date(formatString: "MMM DD, YY")
          illustrationCombined {
            file {
              url
            }
          }
          slug
        }
      }
    }
  }
`

