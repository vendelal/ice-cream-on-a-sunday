import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    // <Helmet title={`${post.title} | ${siteTitle}`} />
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const post = this.props.data.contentfulRecipePost

    return (
      <div style={{ background: '#fff' }}>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulRecipePost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
