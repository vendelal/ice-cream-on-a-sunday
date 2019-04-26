import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing } from '../styles/variables'

const SectionHeaderWrapper = styled.header`
  display: grid;
  margin: ${Spacing.spacingXLarge} 0 ${Spacing.spacingLarge};
  max-width: ${Sizes.contentWidth};
  position: relative;

  &::before {
    background-color: ${Colors.accentColor};
    content: '';
    display: block;
    height: 1px;
    left: 0;
    right: 0;
    position: absolute;
    top: 1.1rem;
  }

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    margin: ${Spacing.spacingXLarge} 0 ${Spacing.spacingLarge};
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    margin: ${props => (props.centered ? '4rem auto 2rem' : '4rem auto 2rem 0')};
    width: ${props => (props.fullWidth ? '100%' : 'auto')};
  }
`

const SectionHeaderText = styled.h3`
  border: 1px solid ${Colors.accentColor};
  background-color: ${Colors.pageBackground};
  color: ${Colors.accentColor};
  display: block;
  font-size: ${Sizes.fontSizeBase};
  letter-spacing: 2px;
  margin: 0 auto 0 0;
  text-align: center;
  text-transform: uppercase;
  padding: ${Spacing.spacingSmall} ${Spacing.spacingLarge};
  z-index: 1;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    // margin: ${props => (props.centered ? '4rem auto' : '4rem auto auto 0')};
    margin-bottom: auto;
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    margin: ${props => (props.centered ? '0 auto auto' : '0 auto auto 0')};
  }
`

const SectionHeader = props => (
  <SectionHeaderWrapper
    centered={props.centered}
    fullWidth={props.fullWidth}
    >
    <SectionHeaderText
      centered={props.centered}
    >
      {props.text}
    </SectionHeaderText>
  </SectionHeaderWrapper>
)

export default SectionHeader