import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing } from '../styles/variables'

const SectionHeaderWrapper = styled.header`
  display: grid;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};
`

const SectionHeaderText = styled.h3`
  border: 1px solid ${Colors.accentColor};
  color: ${Colors.accentColor};
  display: block;
  font-size: ${Sizes.fontSizeBase};
  letter-spacing: 2px;
  margin: ${Spacing.spacingXLarge} ${Spacing.spacingLarge}
    ${Spacing.spacingLarge};
  text-align: center;
  text-transform: uppercase;
  padding: ${Spacing.spacingSmall} ${Spacing.spacingBase};
  position: relative;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    display: inline-block;
    margin: ${Spacing.spacingXLarge} auto auto;
    width: 15rem;

    &::before,
    &::after {
      background-color: ${Colors.accentColor};
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      top: 50%;
      width: 12rem;
    }

    &::before {
      left: -12rem;
    }

    &::after {
      right: -12rem;
    }
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    &::before,
    &::after {
      width: 22rem;
    }

    &::before {
      left: -22rem;
    }

    &::after {
      right: -22rem;
    }
  }
`

const SectionHeader = props => (
  <SectionHeaderWrapper>
    <SectionHeaderText>{props.text}</SectionHeaderText>
  </SectionHeaderWrapper>
)

export default SectionHeader
