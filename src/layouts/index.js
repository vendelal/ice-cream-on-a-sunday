import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import SiteHeader from '../components/SiteHeader'

import { Colors, Sizes, Spacing } from '../styles/variables'
import GlobalStyles from '../styles/global-styles'
import { rhythm, scale } from '../utils/typography'

const Navigation = styled.nav`

`

const SiteTitle = styled.h1`
  color: ${Colors.pageBackground};
  text-decoration: none;
`

const FooterWrapper = styled.footer`
  background-color: black;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`

const FooterCTAText = styled.a`
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const FooterCTAImage = styled.img``

const FooterLinks = styled.div``

const FooterCopyright = styled.small``

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <SiteHeader />
      )
    } else {
      header = (
        <SiteHeader />
      )
    }

    let footer = (
      <FooterWrapper>
        <ContentWrapper>
          <FooterCTAText>Follow on Instagram</FooterCTAText>
          <FooterCTAImage />
          <FooterLinks>
            <FooterCopyright>Vendela Larsson 2018</FooterCopyright>
            <Link to={'www.github.com/icecreamonasunday'}>
              Check out this project on GitHub
            </Link>
          </FooterLinks>
        </ContentWrapper>
      </FooterWrapper>
    )

    return (
      <div>
        {header}
        {children()}
        {footer}
      </div>
    )
  }
}

export default Template
