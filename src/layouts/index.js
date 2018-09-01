import React from 'react'
import Link from 'gatsby-link'

import Jumbotron from '../components/jumbotron'
import { rhythm, scale } from '../utils/typography'

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
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
