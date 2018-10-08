import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {colors} from '../styles/variables'

const StyledLink = styled(Link)`
  background-color: ${colors.hotRed};
  border: 2px solid white;
  box-shadow: -3px 3px 0px -2px red;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  margin-left: 3px;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-appearance: none;
`

const ButtonPrimary = props => (
  <StyledLink className="button__primary" to={props.destination}>
    {props.text}
  </StyledLink>
)

export default ButtonPrimary
