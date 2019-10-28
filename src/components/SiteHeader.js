import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import logo from '../images/logo.svg'
import hamburgerMenu from '../images/hamburger-menu.svg'
import activeLinkDrip from '../images/active-link-drip.svg'

const SiteHeaderWrapper = styled.header`
  background-color: ${Colors.accentColor};
  padding: ${Spacing.spacingSmall} ${Spacing.spacingMedium} ${Spacing.spacingBase};
  position: sticky;
  top: 0;
  z-index: ${Zindices.modal};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    padding: ${Spacing.spacingMedium};
  }
`

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

const SiteTitle = styled(Link)`
  display: block;
`

const Logo = styled.img`
  width: 400px;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    margin-bottom: 0;
  }
`

const MobileMenuButton = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  color: ${Colors.pageBackground};
  cursor: pointer;
  font-weight: bold;
  height: 21px;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    display: none;
  }
`

const LinksList = styled.ul`
  // display: none;
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  list-style-type: none;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0 ${Spacing.spacingBase};
`

const NavLink = styled(Link)`
  color: ${Colors.pageBackground};
`

const activeLinkStyle = {
  borderBottom: "4px solid",
  fontFamily: "Circular-Bold",
  paddingBottom: 5,
}

class SiteHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleFontSize: `70px`,
    }
  }

  componentDidMount = function() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let main = document.getElementsByTagName('main')[0]
    let fromTop = main.pageYOffset
    let size

    if (fromTop <= 70 || fromTop === 0) {
      size = 70
      // size = Math.round(70 - ((fromTop / 72) * (70 - 24)))
      console.log("fromTop " + fromTop)
    } else {
      size = 24
    }

    this.setState({
      titleFontSize: this.state.titleFontSize = `${size}px`,
    },
    () => { console.log(this.state.titleFontSize)}
    );
  }

  render() {
    return (
      <SiteHeaderWrapper>
        <Navigation>
          <SiteTitle
            exact to={'/'}
          >
            <Logo src={logo} />
          </SiteTitle>
          <LinksList>
            <ListItem>
              <NavLink
                exact to={'/'}
                activeStyle={activeLinkStyle}>
                Home
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
              exact to={'/posts'}
              activeStyle={activeLinkStyle}>
              All Recipes
            </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                exact to={'/about'}
                activeStyle={activeLinkStyle}>
                About
              </NavLink>
            </ListItem>
          </LinksList>
        </Navigation>
      </SiteHeaderWrapper>
    )
  }
}

export default SiteHeader


// <MobileMenuButton>
//             Menu <span aria-hidden="true">😋</span>
//           </MobileMenuButton>
