import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const SectionHeader = styled.h2`
  position: relative;
  text-align: {props.position};
  width: 960px;
`

const Header = props => (

  <SectionHeader>{props.text}</SectionHeader>

)

export default Header
