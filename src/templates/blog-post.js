import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import SectionHeader from '../components/SectionHeader'
import ButtonPrimary from '../components/ButtonPrimary'

import { Colors, Sizes, Spacing } from '../styles/variables'
import { rhythm, scale } from '../utils/typography'

const RecipePage = styled.main`
  background-color: ${Colors.pageBackground};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const BlogPostTitleArea = styled.header`
  border-top: ${Sizes.borderThick} solid ${Colors.textColor};
  display: grid;
  grid-template-areas:
    "title"
    "meta";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium};
  max-width: ${Sizes.contentWidth};
  padding: ${Spacing.spacingMedium} 0;
  position: relative;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-gap: ${Spacing.spacingLarge};
    grid-template-areas:
      "title  meta";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium} 0;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    margin: ${Spacing.spacingXLarge} auto 0;
  }
`

const BlogPostTitle = styled.h1`
  font-size: ${Colors.fontSizeLarge};
  grid-area: title;
  padding-right: ${Spacing.spacingXLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    padding-right: 0;
  }
`

const RecipeMeta = styled.div`
  grid-area: meta;
  padding-right: ${Spacing.spacingXLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    margin-left: ${Spacing.spacingMedium};
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    margin: 0;
  }
`

const Illustration = styled.img`
  max-width: 150px;
  position: absolute;
  right: -40px;
  top: 20px;
  z-index: 99;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    max-width: 300px;
    right: -200px;
    top: -130px;
  }
`

const RecipeArea = styled.section`
  display: grid;
  grid-template-areas:
    "ingredients-header"
    "ingredients"
    "directions-header"
    "directions"
    "photo"
    "share-button";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};
  padding: 0 ${Spacing.spacingMedium};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-gap: ${Spacing.spacingLarge};
    grid-template-areas:
      "ingredients-header directions-header"
      "ingredients        directions       "
      "photo              directions       "
      "photo              directions       "
      ".........          share-button     ";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 1fr;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    padding: 0;
  }
`

const Ingredients = styled.ul`
  grid-area: ingredients;
  list-style-type: none;
  margin: 0;
`

const Ingredient = styled.p`
  border-bottom: 1px solid ${Colors.lightGrayBorder};
  display: grid;
  grid-gap: ${Spacing.spacingBase};
  grid-template-columns: 25% 75%;
  padding: ${Spacing.spacingSmallish} 0;
  margin: 0;
`

const IngredientMeasurement = styled.span`
  color: ${Colors.headerColor};
  display: inline-block;
  font-weight: 900;
  text-align: right;
  width:
`

const IngredientName = styled.span`
  font-size: ${Sizes.fontSizeSmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: ${Sizes.lineHeightMedium};
`

const Directions = styled.ol`
  grid-area: directions;
  list-style-type: none;
  margin: 0 ${Spacing.spacingMedium};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    margin: 0 ${Spacing.spacingMedium} 0 0;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    margin: 0 0 ${Spacing.spacingXLarge} 0;
  }
`

const Instruction = styled.li``

const PhotoArea = styled.section`
  grid-area: photo;
`

const Photo = styled.img`
  box-sizing:
  margin: ${Spacing.spacingMedium};
  max-width: 300px;
`

const ShareButton = styled(ButtonPrimary)`
  grid-area: share-button;
`

class BlogPostTemplate extends React.Component {
  render() {
    // <Helmet title={`${post.title} | ${siteTitle}`} />
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const post = this.props.data.contentfulRecipePost

    const ingredients = post.ingredients.listOfIngredients
    const directions = post.directions.listOfDirections
    const illustrationUrl = post.illustrationSeparate && post.illustrationSeparate.file.url
    const photoUrl = post.inTheWildPhoto && post.inTheWildPhoto.file.url

    return (
      <RecipePage>
        <BlogPostTitleArea>
          <BlogPostTitle>{post.title}</BlogPostTitle>
          <RecipeMeta>
            <time>{post.date}</time>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </RecipeMeta>
          <Illustration src={illustrationUrl} />
        </BlogPostTitleArea>
        <RecipeArea>
          <SectionHeader text="Ingredients" fullWidth="true" />
          <Ingredients>
            {ingredients.map(item => (
              <Ingredient>
                <IngredientMeasurement>
                  {item.measurement}
                </IngredientMeasurement>
                <IngredientName>
                  {item.name}
                </IngredientName>
              </Ingredient>
            ))}
          </Ingredients>
          <SectionHeader text="Directions" fullWidth="true" />
          <Directions>
            {directions.map(item => (
              <Instruction>
                {item}
              </Instruction>
            ))}
            <ShareButton text="Share this recipe" />
          </Directions>
          <PhotoArea>
            <SectionHeader text="In the Wild" fullWidth="true" />
            <Photo src={photoUrl} />
          </PhotoArea>
        </RecipeArea>
      </RecipePage>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulRecipePost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM DD, YYYY")
      illustrationSeparate {
        file {
          url
        }
      }
      inTheWildPhoto {
        file {
          url
        }
      }
      ingredients {
        listOfIngredients {
          name
          measurement
        }
      }
      directions {
        listOfDirections
      }
    }
  }
`
