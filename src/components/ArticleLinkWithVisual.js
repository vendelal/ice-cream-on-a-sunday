import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing } from '../styles/variables'

const ArticleLinkWithVisualWrapper = styled.li`
  align-self: baseline;
  cursor: pointer;
  display: grid;
  justify-self: stretch;
`

const LinkWrapper = styled(Link)`
  cursor: pointer;
  display: grid;
  justify-self: stretch;

  @media screen and (min-width: ${Sizes.breakpointXSmall}) {
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    padding: 0;
  }

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    padding: ${Spacing.spacingBase};
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: ${Spacing.spacingBase};
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    padding: ${Spacing.spacingLarge} ${Spacing.spacingSmall};
  }
`

const ArticleLinkWithVisualImage = styled.img`
  animation-delay: 300ms;
  animation-duration: 500ms;
  animation-fill-mode: both;
  animation-name: fade-in-down;
  animation-timing-function: ease-out;
  max-width: 150px;
  padding-bottom: ${Spacing.spacingLarge};
  place-self: center;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const ArticleLinkWithVisualText = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto;
  grid-auto-flow: column;

  @media screen and (min-width: ${Sizes.breakpointXSmall}) {
    align-self: center;
  }
`

const ArticleLinkWithVisualTitle = styled.p`
  color: ${Colors.headerColor};
  grid-column: 2 / 3;
  margin-bottom: 0;
  font-size: ${Sizes.fontSizeExtraMedium};
  font-weight: bold;

  &::before {
    border: 2px solid ${Colors.textColor};
    content: '';
    display: block;
    margin-bottom: ${Spacing.spacingSmall};
    width: 100 %;
  }
`

const ArticleLinkWithVisualDate = styled.time`
  align-self: start;
  font-family: "Circular-Regular";
  font-weight: 400;
  margin-top: ${Spacing.spacingMedium};
  justify-self: center;
  transform: rotate(-90deg);
  white-space: nowrap;
`

const ArticleLinkWithVisual = ({ post, imageUrl }) => (
  <ArticleLinkWithVisualWrapper>
    <LinkWrapper to={post.slug}>
      <ArticleLinkWithVisualImage
        src={imageUrl}
        aria-hidden="true" />
      <ArticleLinkWithVisualText>
      <ArticleLinkWithVisualDate>
        {post.date}
      </ArticleLinkWithVisualDate>
      <ArticleLinkWithVisualTitle>
        {post.title}
      </ArticleLinkWithVisualTitle>
      </ArticleLinkWithVisualText>
    </LinkWrapper>
  </ArticleLinkWithVisualWrapper>
)

export default ArticleLinkWithVisual
