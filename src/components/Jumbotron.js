import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import ButtonPrimary from './ButtonPrimary'
import { rhythm, scale } from '../utils/typography'

import gridPaper from '../images/grid_paper.jpg'

const JumbotronWrapper = styled.section`
  background-color: ${Colors.pageBackground};
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

const JumbotronTitleWrapper = styled.div`
  border-top: 4px solid black;
  padding: ${Spacing.spacingBase} 0;
`

const JumbotronTitle = styled.h1`
  margin-bottom: 0;
`

const JumbotronDate = styled.time`
  margin-top: ${Spacing.spacingBase};
`

const JumbotronImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 5;
  justify-self: center;
  margin: 0;
  max-height: 310px;
  z-index: ${Zindices.modal};

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
        <JumbotronTitleWrapper>
          <JumbotronTitle>{props.title}</JumbotronTitle>
        </JumbotronTitleWrapper>
        <JumbotronDate>{props.date}</JumbotronDate>
        <p>{props.excerpt}{props.slug}</p>
        <ButtonPrimary text="Give me the recipe" destination={props.slug} />
      </JumbotronTextBanner>
    </ContentWrapper>
  </JumbotronWrapper>
)

export default Jumbotron
