import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background-color: red;
  color: white;
  -webkit-appearance: none;
`

const ButtonPrimary = props => (
  <StyledLink className="button__primary" to={props.destination}>
    {props.text}
  </StyledLink>
)

export default ButtonPrimary
