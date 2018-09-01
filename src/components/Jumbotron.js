import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from './buttonprimary'


const JumbotronWrapper = styled.div`
  background-image: url("grid-paper.jpg");
  background-color: cornflowerblue;
  width: 100%;
`

const ContentWrapper = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
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
`


const Jumbotron = props => (

  <JumbotronWrapper>
    <ContentWrapper>
      <img src="images/peanut-butter-cookies-and-cream-combined.png" />
      <JumbotronTextBanner>
        <JumbotronTitle>{props.title}</JumbotronTitle>
        <date>{props.date}</date>
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
