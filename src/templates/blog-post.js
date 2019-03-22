import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import SectionHeader from '../components/SectionHeader'

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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium};
  max-width: ${Sizes.contentWidth};
  padding: ${Spacing.spacingMedium} 0;
  position: relative;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-gap: ${Spacing.spacingMedium};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: ${Spacing.spacingXLarge} auto;
  }
`

const BlogPostTitle = styled.h1`
  font-size: ${Colors.fontSizeLarge};
  grid-column: 1 / 1;
  grid-row: 1 / 2;
  padding-right: ${Spacing.spacingXLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    padding-right: 0;
  }
`

const RecipeMeta = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 3;
  padding-right: ${Spacing.spacingXXLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`

const RecipeDescription = styled.p``

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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-gap: ${Spacing.spacingMedium};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }
`

const IngredientsHeader = styled(SectionHeader)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const IngredientsList = styled.ul`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  list-style-type: none;
  margin: 0 ${Spacing.spacingMedium};
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
  font-weight: 900;
  text-align: right;
  display: inline-block;
  width:
`

const IngredientName = styled.span`
  font-size: ${Sizes.fontSizeSmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: ${Sizes.lineHeightMedium};
`

const InstructionsHeader = styled(SectionHeader)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`

const InstructionsList = styled.ol`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  list-style-type: none;
  margin: 0 ${Spacing.spacingMedium};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin: 0;
  }
`

const Instruction = styled.li``

const Photo = styled.img`
  box-sizing:
  margin: ${Spacing.spacingMedium};
  max-width: 300px;
`

class BlogPostTemplate extends React.Component {
  render() {
    // <Helmet title={`${post.title} | ${siteTitle}`} />
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const post = this.props.data.contentfulRecipePost

    const ingredientsList = post.ingredients.listOfIngredients
    const illustrationUrl = post.illustrationSeparate && post.illustrationSeparate.file.url
    const photoUrl = post.inTheWildPhoto && post.inTheWildPhoto.file.url

    return (
      <RecipePage>
        <BlogPostTitleArea>
          <BlogPostTitle>{post.title}</BlogPostTitle>
          <RecipeMeta>
            <time>{post.date}</time>
            <RecipeDescription>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </RecipeDescription>
          </RecipeMeta>
          <Illustration src={illustrationUrl} />
        </BlogPostTitleArea>
        <RecipeArea>
          <IngredientsHeader text="Ingredients" />
          <IngredientsList>
            {ingredientsList.map(item => (
              <Ingredient>
                <IngredientMeasurement>
                  {item.measurement}
                </IngredientMeasurement>
                <IngredientName>
                  {item.name}
                </IngredientName>
              </Ingredient>
            ))}
          </IngredientsList>
          <InstructionsHeader text="Directions" />
          <InstructionsList>
            {post.instructions.map(item => (
              <Instruction>
                {item}
              </Instruction>
            ))}
          </InstructionsList>
          <SectionHeader text="In the Wild" />
          <Photo src={photoUrl} />
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
      instructions
    }
  }
`
