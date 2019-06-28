import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'
import hamburgerMenu from '../images/hamburger-menu.svg'

const SiteHeaderWrapper = styled.header`
  background-color: ${Colors.accentColor};
  padding: ${Spacing.spacingSmall} ${Spacing.spacingMedium} ${Spacing.spacingBase};
  position: sticky;
  top: 0;
  z-index: ${Zindices.ceiling};

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    padding: ${Spacing.spacingMedium};
  }
`

const Navigation = styled.nav`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${Sizes.contentWidth};
`

const SiteTitle = styled(Link)`
  color: ${Colors.pageBackground};
  display: block;
  font-family: 'Ahkio-Bold', 'sans-serif';
  font-size: ${props => props.fontSize};
  line-height: 0.85;
  margin-left: -${Spacing.spacingSmall};
  padding-bottom: ${Spacing.spacingBase};
  transform: rotate(-9deg);

  &::before {
    content: '';
    display: inline-block;
    height: ${Spacing.spacingSmall};
    margin-bottom: ${Spacing.spacingBase};
    width: ${Spacing.spacingSmall};
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
  display: none;
  justify-content: center;
  list-style-type: none;
  margin: 0;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    display: flex;
    justify-content: flex-end;
  }
`

const ListItem = styled.li`
  margin: 0 ${Spacing.spacingBase};
`

const NavLink = styled(Link)`
  color: ${Colors.pageBackground};
`

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
            to={'/'}
            fontSize={this.state.titleFontSize}
          >
            Ice Cream <br />on a Sunday
          </SiteTitle>
          <MobileMenuButton>
            Menu <span aria-hidden="true">😋</span>
          </MobileMenuButton>
          <LinksList>
            <ListItem>
              <NavLink to={'/'}>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/posts'}>All Recipes</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/'}>About</NavLink>
            </ListItem>
          </LinksList>
        </Navigation>
      </SiteHeaderWrapper>
    )
  }
}

export default SiteHeader
