import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import SectionHeader from '../components/SectionHeader'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import { rhythm, scale } from '../utils/typography'

const RecipePage = styled.div`
  background-color: ${Colors.pageBackground};
`

const BlogPostTitleArea = styled.div``

const BlogPostTitle = styled.h1`
  font-size: ${Colors.fontSizeLarge};
`

const Illustration = styled.img``

const IngredientsArea = styled.div``

const IngredientsList = styled.ul``

const Ingredient = styled.p``

const IngredientMeasurement = styled.span``

const IngredientName = styled.span``

const InstructionsList = styled.ul``

const Instruction = styled.li``

const InTheWildArea = styled.div``

const Photo = styled.img``

class BlogPostTemplate extends React.Component {
  render() {
    // <Helmet title={`${post.title} | ${siteTitle}`} />
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const post = this.props.data.contentfulRecipePost

    const ingredientsList = post.ingredients.listOfIngredients

    return (
      <RecipePage>
        <BlogPostTitleArea>
          <BlogPostTitle>{post.title}</BlogPostTitle>
          <time>{post.date}</time>
          <Illustration src={post.illustrationCombined.file.url} />
        </BlogPostTitleArea>
        <SectionHeader text="Ingredients" />
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
        <SectionHeader text="Directions" />
        <InstructionsList>
          {post.instructions.map(item => (
            <Instruction>
              {item}
            </Instruction>
          ))}
        </InstructionsList>
        { post.inTheWildPhoto &&
          <InTheWildArea>
            <SectionHeader text="In the Wild" />
            <Photo src={post.inTheWildPhoto.file.url} />
          </InTheWildArea>
        }
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
      illustrationCombined {
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
