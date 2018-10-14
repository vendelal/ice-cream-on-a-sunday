import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from '../components/buttonprimary'
import Jumbotron from '../components/jumbotron'
import SectionHeader from '../components/sectionheader'
import ArticleLinkWithVisual from '../components/articlelinkwithvisual'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import { rhythm } from '../utils/typography'

const RecentPostsArea = styled.section`
  background-color: ${Colors.warmWhite};
  border-top: 1px solid #f7d3cb;
  border-bottom: 1px solid #f7d3cb;
`

const RecentPostsContentWrapper = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

const RestOfPostsArea = styled.section``

const RestOfPostsContentWrapper = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem;
`

class HomePage extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const featuredPost = get(this, 'props.data.featured.edges[0].node')
    const edges = get(this, 'props.data.nextThree.edges')
    const nextThreePosts = edges.map(edge => edge.node)
    const lastEdges = get(this, 'props.data.restFour.edges')
    const restFourPosts = lastEdges.map(edge => edge.node)

    return (
      <div>
        <Jumbotron
          title={featuredPost.title}
          date={featuredPost.date}
          excerpt="TODO: fix the rich text Contentful thing."
          illustrationCombined={featuredPost.illustrationCombined.file.url}
          slug="slug"
        />
        <RecentPostsArea>
          <ContentWrapper>
            <SectionHeader text="Recent Creations" />
          </ContentWrapper>
          <RecentPostsContentWrapper>
            {nextThreePosts.map(nextThreePosts => (
              <ArticleLinkWithVisual
                nextThreePosts={nextThreePosts}
                title={nextThreePosts.title}
                date={nextThreePosts.date}
                image={nextThreePosts.illustrationIngredients.file.url}
                slug="slug"
              />
            ))}
          </RecentPostsContentWrapper>
        </RecentPostsArea>
        <RestOfPostsArea>
          <ContentWrapper>
            <SectionHeader text="Recent Creations" />
          </ContentWrapper>
          <RestOfPostsContentWrapper>
            {restFourPosts.map(restFourPosts => (
              <ArticleLinkWithVisual
                restFourPosts={restFourPosts}
                title={restFourPosts.title}
                date={restFourPosts.date}
                image={restFourPosts.illustrationCombined.file.url}
                slug="slug"
              />
            ))}
          </RestOfPostsContentWrapper>
        </RestOfPostsArea>
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
    featured: allContentfulRecipePost(
      sort: { fields: [date], order: ASC }
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
        }
      }
    }
  }
`
