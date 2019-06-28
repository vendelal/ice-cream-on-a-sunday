import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";

import SiteHeader from '../components/SiteHeader'

import instagramIcon from '../images/instagram-logo.svg'
import linkArrow from '../images/link-arrow.svg'
import metaImage from '../images/pistachio-combined.png'

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

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    align-items: baseline;
    flex-direction: row;
  }
`

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

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    let helmet = (
      <Helmet
        title={siteTitle}
        meta={[
          {
            name: "description",
            content: "Ice Cream on a Sunday - A blog about ice cream",
          },
          {
            name: "keywords",
            content: "ice cream, blog, sundae, sunday",
          },
          {
            name: "og:image",
            content: {metaImage},
          },
          {
            name: "og:type",
            content: "blog",
          },
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
        ]}
      />
    )

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
          <FooterCopyright>© Vendela Larsson {new Date().getFullYear()}</FooterCopyright>
          <GitHubLink
            href={'https://github.com/vendelal/ice-cream-on-a-sunday'}>
            Check out this project on GitHub
          </GitHubLink>
        </FooterLinks>
      </FooterWrapper>
    )

    return (
      <div>
        {helmet}
        {header}
        {children()}
        {footer}
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
