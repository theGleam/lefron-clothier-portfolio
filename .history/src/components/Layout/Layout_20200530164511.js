/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "@components/Header"
import SideBar from '@components/SideBar';
import "./Layout.css"

export const siteData = useStaticQuery(graphql`
query SiteTitleQuery {
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

const Layout = ({ children }) => {
  console.log()
  return (
    <div id="App">
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        menuLinks={siteData.site.siteMetadata.menuLinks}
        socialLinks={siteData.site.siteMetadata.socialLinks}
        right />
      <div
        id="page-wrap"
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          display: 'grid'
        }}
      >
        <Header
          siteTitle={siteData.site.siteMetadata.title}

        />
        <main>{children}</main>
      </div>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

