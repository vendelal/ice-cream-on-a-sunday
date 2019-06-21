import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from '../components/ButtonPrimary'
import Jumbotron from '../components/Jumbotron'
import SectionHeader from '../components/SectionHeader'
import ArticleLinkWithVisual from '../components/ArticleLinkWithVisual'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import { rhythm } from '../utils/typography'

import gridPaper from '../images/grid_paper.jpg'

const RecentPostsArea = styled.section`
  background-color: ${Colors.pageBackground};
  border-top: 1px solid ${Colors.lightBorder};
`

const RecentPostsContentWrapper = styled.ul`
  background-color: ${Colors.pageBackground};
  display: grid;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-gap: ${Spacing.spacingMedium};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    padding-bottom: ${Spacing.spacingXLarge};
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    grid-gap: ${Spacing.spacingXXLarge};
  }
`

const RestOfPostsArea = styled.section`
  background-color: ${Colors.pageBackground};
  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
  }
`

const RestOfPostsContentWrapper = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    margin-bottom: ${Spacing.spacingXXLarge};
  }
`

const GridPaperImage = styled.div`
  background-color: ${Colors.pageBackground};
  background-image: url(${gridPaper});
  background-repeat: repeat;
  background-size: cover;
  border-top: 1px solid ${Colors.lightBorder};
  display: none;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 100%;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    display: block;
  }
`

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const featuredPost = get(this, 'props.data.featured.edges[0].node')
    const edges = get(this, 'props.data.nextThree.edges')
    const nextThreePosts = edges.map(edge => edge.node)
    const lastEdges = get(this, 'props.data.restFour.edges')
    const restFourPosts = lastEdges.map(edge => edge.node)

    return (
      <main>
        <Jumbotron
          title={featuredPost.title}
          date={featuredPost.date}
          excerpt="TODO: fix the rich text Contentful thing."
          illustrationCombined={featuredPost.illustrationCombined.file.url}
          slug={featuredPost.slug}
        />
        <RecentPostsArea>
          <SectionHeader text="Recent Creations" centered="true" />
          <RecentPostsContentWrapper>
            {nextThreePosts.map(post => (
              <ArticleLinkWithVisual
                post={post}
                imageUrl={post.illustrationIngredients.file.url}
                slug={post.slug}
              />
            ))}
          </RecentPostsContentWrapper>
        </RecentPostsArea>
        <RestOfPostsArea>
          <SectionHeader
            text="More Posts"
            fullWidth="true"
            centered="true" />
          <GridPaperImage />
          <RestOfPostsContentWrapper>
            {restFourPosts.map(post => (
              <ArticleLinkWithVisual
                post={post}
                imageUrl={post.illustrationCombined.file.url}
                slug={post.slug}
              />
            ))}
          </RestOfPostsContentWrapper>
        </RestOfPostsArea>
      </main>
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
    featured: allContentfulRecipePost(
      sort: { fields: [date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          title
          date(formatString: "MMMM DD, YYYY")
          illustrationCombined {
            file {
              url
            }
          }
          slug
        }
      }
    }
    nextThree: allContentfulRecipePost(
      sort: { fields: [date], order: ASC }
      skip: 1
      limit: 3
    ) {
      edges {
        node {
          title
          date(formatString: "MMM DD, YY")
          illustrationIngredients {
            file {
              url
            }
          }
          slug
        }
      }
    }
    restFour: allContentfulRecipePost(
      sort: { fields: [date], order: ASC }
      skip: 4
      limit: 4
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
