import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../footer/footer"
import styles from "./layout.module.css"
import Header from "../header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      {children}
      <Footer />
    </>
  )
}


export default Layout
