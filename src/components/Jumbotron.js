import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from './buttonprimary'


const JumbotronWrapper = styled.div`
  background-image: url("images/grid-paper.jpg");
  background-color: cornflowerblue;
  width: 100%;
`

const ContentWrapper = styled.div`
  background-color: pink;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem;
`
const JumbotronTextBanner = styled.div`
  background-color: white;
  border: 1px solid #F7D3CB;
  border-top: 0;
  margin: 0px 0px 50px;
  padding: 100px 50px 60px;
  width: 450px;
`

const JumbotronTitle = styled.h1`
  border-top: 4px solid black;
  line-height: 4rem;
  margin-bottom: 0;
`

const JumbotronDate = styled.small`
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`


const Jumbotron = ( props ) => (

  <JumbotronWrapper>
    <ContentWrapper>
      <img src="./peanut-butter-cookies-and-cream-combined.png" />
      <JumbotronTextBanner>
        <JumbotronTitle>{props.title}</JumbotronTitle>
        <JumbotronDate>{props.date}</JumbotronDate>
        <p>{props.excerpt}</p>
        <ButtonPrimary
          text="Give. Me. The. Recipe."
          destination={props.slug}
        />
      </JumbotronTextBanner>
    </ContentWrapper>
  </JumbotronWrapper>

)

export default Jumbotron

// export const query = graphql`
//   query BlogPostQuery {
//     allContentfulRecipePost(sort: { fields: [createdAt], order: ASC }) {
//       edges {
//         node {
//           title
//           date
//           instructions
//           ingredients
//           ingredientIllustration
//           combinedIllustration
//           separatedIllustration
//           inTheWildPhoto
//         }
//       }
//     }
//   }
// `
