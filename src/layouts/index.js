import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const FooterWrapper = styled.div`
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
        <h1 className="nav__site-title">
          <Link
            to={'/'}
          >
            Ice Cream on a Sunday
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="nav__site-title nav__site-title--small">
          <Link
            to={'/'}
          >
            Ice Cream on a Sunday
          </Link>
        </h3>
      )
    }

    let footer = (
      <FooterWrapper>
        <ContentWrapper>
          <FooterCTAText>Follow on Instagram</FooterCTAText>
          <FooterCTAImage></FooterCTAImage>
          <FooterLinks>
            <FooterCopyright>
              Vendela Larsson 2018
            </FooterCopyright>
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
