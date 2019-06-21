import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import SiteHeader from '../components/SiteHeader'

import instagramIcon from '../images/instagram-logo.svg'
import linkArrow from '../images/link-arrow.svg'

import { Colors, Sizes, Spacing } from '../styles/variables'
import GlobalStyles from '../styles/global-styles'
import { rhythm, scale } from '../utils/typography'


const SiteTitle = styled.h1`
  color: ${Colors.pageBackground};
  text-decoration: none;
`

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${Spacing.spacingXLarge};
  width: 100%;
`

const FooterCTAText = styled.a`
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const InstagramIcon = styled.img`
  margin-top: ${Spacing.spacingSmall};
`

const FooterLinks = styled.div``

const GitHubLink = styled.a`
  color: ${Colors.linkColor};

  &:hover {
    color: #D2DBF9;
    transition: color 500ms ease;
  }

  &::after {
    content: url(${linkArrow});
    display: inline-block;
    margin-left: ${Spacing.spacingSmall};
  }
`

const FooterCopyright = styled.small`
  margin-right: ${Spacing.spacingBase};
`

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
        <FooterCTAText
          href={'https://www.instagram.com/icecreamonasunday'}>
          Follow on Instagram
        </FooterCTAText>
        <InstagramIcon
          src={instagramIcon}
        />
        <FooterLinks>
          <FooterCopyright>© Vendela Larsson 2018</FooterCopyright>
          <GitHubLink
            href={'https://github.com/vendelal/ice-cream-on-a-sunday'}>
            Check out this project on GitHub
          </GitHubLink>
        </FooterLinks>
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
