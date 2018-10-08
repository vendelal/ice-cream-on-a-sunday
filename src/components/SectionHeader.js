import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'


const SectionHeaderWrapper = styled.div`
  width: 100%;
`

const SectionHeaderText = styled.h3`
  border: 1px solid red;
`


const SectionHeader = ( props ) => (

  <SectionHeaderWrapper>
    <SectionHeaderText>{props.text}</SectionHeaderText>
  </SectionHeaderWrapper>

)

export default SectionHeader
