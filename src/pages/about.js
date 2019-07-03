import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Colors, Sizes, Spacing, Zindices } from '../styles/variables'

const AboutPageWrapper = styled.main`
  background-color: ${Colors.pageBackground};
  display: flex;
  padding-bottom: ${Spacing.spacingXXLarge};
`

const AboutPageTitle = styled.h1`
  max-width: 20ch;
`

const Content = styled.div`
  border-top: ${Sizes.borderThick} solid ${Colors.textColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium};
  max-width: ${Sizes.contentWidth};
  padding: ${Spacing.spacingMedium} 0;
  position: relative;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    flex-direction: row;
    margin: ${Spacing.spacingXLarge} ${Spacing.spacingMedium} 0;
    padding: ${Spacing.spacingBase} 0 0;
    width: 100%;
  }

  @media screen and (min-width: ${Sizes.breakpointLarge}) {
    margin: ${Spacing.spacingXLarge} auto 0;
    width: 100%;
  }
`

const Text = styled.div`
  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    width: 55%;
  }
`

const AboutText = styled.p`
  margin-top: ${Spacing.spacingLarger};
  padding-right: ${Spacing.spacingLarge};
`

const FeaturedIllustration = styled.img`
  height: 80%;

  @media screen and (min-width: ${Sizes.breakpointSmall}) {
    width: 45%;
  }
`

class AboutPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.oldest.edges')

    return (
      <AboutPageWrapper>
        <Content>
          <Text>
            <AboutPageTitle>
              Why did I make a blog about ice cream?
            </AboutPageTitle>
            <AboutText>
              In the late fall of 2016 I asked for an ice cream maker for Christmas. I'm still not entirely sure why, but I do know that ice cream is delicious.
                <br /><br />
                Being someone who is more "art" than "science" (a fancy way of saying I don't like measuring things, keeping track of what I've added, or generally remembering details) eventually I started forgetting the flavors I had already made. Luckily my day job of being a web designer and front-end developer gave me the skills to make something to remember the flavors and keep track of the recipes (since they come from all different sources and inspirations).
                <br /><br />
                I'm pretty lucky to work at a <a href="https://thoughtbot.com/">company</a> which gives me <a href="https://thoughtbot.com/playbook/our-company/time">investment time</a> so I started nerding out about which technologies to use to power this blog. The version you're seeing now is version 2, and I already hate it and want to build version 3 🤓. This blog has been a pretty sweet learning tool, and I can't wait to do more fancy things with it. If you're curious about the technology behind this blog, check out the <a href="https://github.com/vendelal/ice-cream-on-a-sunday">github repo</a>.
                <br /><br />
                I hope you enjoy the recipes and tell all your friends about it so it gets famous enough for me to receive free ice cream in the mail or something!
                <br /><br />
                <em>All illustrations and photos are done by me. All the recipes are written by me, even if they were inspired by ones I found somewhere else!</em>
            </AboutText>
          </Text>
          <FeaturedIllustration src={posts[1].node.illustrationCombined.file.url}/>
        </Content>
      </AboutPageWrapper>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query OldestPosts {
    oldest: allContentfulRecipePost(
      sort: { fields: [date], order: ASC },
      limit: 3
    ) {
      edges {
        node {
          title
          date(formatString: "MMM DD, YY")
          illustrationCombined {
            file {
              url
            }
          }
          slug
        }
      }
    }
  }
`
