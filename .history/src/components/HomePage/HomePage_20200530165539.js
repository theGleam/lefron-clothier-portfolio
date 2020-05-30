import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import DescriptionCard from '@components/DescriptionCard'
import Image from '@components/Image'
// import SocialLinks from '@components/SocialLinks';
// import siteData from '@components/Layout';
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


    site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
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
          socialLinks={data.site.siteMetadata.socialLinks}
          right />
      </div>
      <div className="item2">
        <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default HomePageContainer