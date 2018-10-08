import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'


const ArticleLinkWithVisualWrapper = styled.div`
  width: 23%;
`

const ArticleLinkWithVisualText = styled.div`
  background-color: white;
  position: relative;
`

const ArticleLinkWithVisualTitle = styled.h4`
  border-top: 4px solid black;
  margin-bottom: 0;
`

const ArticleLinkWithVisualDate = styled.small`
  font-weight: bold;
  left: -3rem;
  letter-spacing: 1px;
  position: absolute;
  text-transform: uppercase;
  top: 14px;
  transform: rotate(-90deg);
`

const ArticleLinkWithVisualImage = styled.img`
  height: 175px;
`


const ArticleLinkWithVisual = ( props ) => (

  <ArticleLinkWithVisualWrapper>
    <ArticleLinkWithVisualImage src={props.image} />
     <ArticleLinkWithVisualText>
       <ArticleLinkWithVisualDate>{props.date}</ArticleLinkWithVisualDate>
       <ArticleLinkWithVisualTitle>{props.title}</ArticleLinkWithVisualTitle>
       <Link to={props.slug}>Read more</Link>
     </ArticleLinkWithVisualText>
  </ArticleLinkWithVisualWrapper>

)

export default ArticleLinkWithVisual
