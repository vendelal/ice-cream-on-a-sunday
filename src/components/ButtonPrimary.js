import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background-color: red;
  border: 2px solid white;
  box-shadow: -3px 3px 0px -2px red;
  color: white;
  font-size: 18px;
  margin-left: 3px;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-appearance: none;
`

const ButtonPrimary = props => (
  <StyledLink className="button__primary" to={props.destination}>
    {props.text}
  </StyledLink>
)

export default ButtonPrimary
