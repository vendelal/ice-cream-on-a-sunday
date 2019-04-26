import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing } from '../styles/variables'

const SiteHeaderWrapper = styled.header`
  background-color: ${Colors.accentColor};
  padding: ${Spacing.spacingMedium};
  position: sticky;
  top: 0;
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
  font-family: 'Ahkio-Bold', 'sans-serif';
  font-size: ${props => props.fontSize};
  line-height: 1;
  margin-bottom: ${Spacing.spacingBase};
  margin-left: -${Spacing.spacingSmall};
  transform: rotate(-9deg);

  &::before {
    content: '';
    display: inline-block;
    height: ${Spacing.spacingSmall};
    width: ${Spacing.spacingSmall};
  }
`

const LinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
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
      titleFontSize: `56px`,
    }
  }

  componentDidMount = function() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = document.documentElement.scrollTop
    let size

    if (scrollTop === 0) {
      size = 56
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
          <LinksList>
            <ListItem>
              <NavLink to={'/'}>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/'}>All Recipes</NavLink>
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