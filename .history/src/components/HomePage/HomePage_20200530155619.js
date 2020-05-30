import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import DescriptionCard from '@components/DescriptionCard'
import Image from '@components/Image'
import SocialLinks from '@components/SocialLinks';
import './HomePage.css'

function HomePageContainer() {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { name: { eq: "image-home-page" }, sourceInstanceName: { eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 780) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)


  const linksData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          
          socialLinks{
            name
            link
          }
        }
      }
    }
    `)

  return (
    <div className="home-container">
      <div className="item1">
        <DescriptionCard />

        <SocialLinks
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          socialLinks={linksData.site.siteMetadata.socialLinks}
          right />
      </div>
      <div className="item2">
        <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default HomePageContainer