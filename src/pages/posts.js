import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ButtonPrimary from '../components/buttonprimary'
// import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulRecipePost.edges')
    //    const title = get(node, 'frontmatter.title') || node.fields.slug return

    //{posts.map(({ node }) => {
    //key={node.fields.slug} to={node.fields.slug}

    return (
      <div>
        <div>
          <small />
          <h3>Title</h3>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query AllQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// allMarkdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
