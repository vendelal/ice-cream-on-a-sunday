import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Colors, Sizes } from '../styles/variables'

const StyledLink = styled(Link)`
  background-color: ${Colors.accentColor};
  border: 2px solid ${Colors.pageBackground};
  box-shadow: -3px 3px 0px -2px ${Colors.accentColor};
  color: white;
  font-size: ${Sizes.fontSizeBase};
  font-weight: 600;
  letter-spacing: 2px;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-appearance: none;
  white-space: nowrap;
`

const ButtonPrimary = props => (
  <StyledLink className="button__primary" to={props.destination}>
    {props.text}
  </StyledLink>
)

export default ButtonPrimary
