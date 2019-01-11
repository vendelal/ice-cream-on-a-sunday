import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import ButtonPrimary from './ButtonPrimary'

import gridPaper from '../images/grid_paper.jpg'

const JumbotronWrapper = styled.section`
  background-color: ${Colors.paper};
  background-image: url(${gridPaper});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(7, 1fr);
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};
  padding: 0px ${Spacing.spacingLarge} ${Spacing.spacingLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const JumbotronTextBanner = styled.div`
  background-color: ${Colors.pageBackground};
  border: 1px solid ${Colors.lightBorder};
  border-top: 0;
  grid-column: 1 / 2;
  grid-row: 3 / 8;
  padding: 150px ${Spacing.spacingLarge} ${Spacing.spacingXLarge};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  @media screen and (min-width: ${Sizes.breakpointMedium}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`

const JumbotronTitle = styled.h3`
  border-top: 4px solid black;
  font-family: 'Ahkio-Bold';
  font-size: ${Sizes.fontSizeLarge};
  line-height: ${Sizes.lineHeightLarge};
  margin-bottom: 0;
`

const JumbotronDate = styled.small`
  display: block;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: ${Spacing.spacingBase} 0px;
`

const JumbotronImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 5;
  justify-self: center;
  margin: 0;
  max-height: 310px;
  z-index: ${Zindices.ceiling};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    max-height: 500px;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    max-height: 500px;
  }
`

const Jumbotron = props => (
  <JumbotronWrapper>
    <ContentWrapper>
      <JumbotronImage src={props.illustrationCombined} />
      <JumbotronTextBanner>
        <JumbotronTitle>{props.title}</JumbotronTitle>
        <JumbotronDate>{props.date}</JumbotronDate>
        <p>{props.excerpt}{props.slug}</p>
        <ButtonPrimary text="Give. Me. The. Recipe." destination={props.slug} />
      </JumbotronTextBanner>
    </ContentWrapper>
  </JumbotronWrapper>
)

export default Jumbotron
