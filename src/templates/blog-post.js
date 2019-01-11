import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {


    return (
      <div style={{ background: '#fff' }}>
      Blog Post
      </div>
    )
  }
}

// <Helmet title={`${post.title} | ${siteTitle}`} />
// const post = get(this.props, 'data.contentfulBlogPost')
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')

// <h1>{post.title}</h1>
// {post.date}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// `
