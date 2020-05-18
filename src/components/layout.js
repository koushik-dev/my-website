import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"

import { Global, css } from "@emotion/core";

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
      <Global styles={css`
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          height: 100%;
          font-family: poppins, sans-serif;
          color: var(--text-color);
        }
        :root {
          --shadow-color: #ebebeb;
          --text-color: #2E3739;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          height: 100%;
        }
      `}/>
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      {children}
      <Footer />
    </>
  )
}


export default Layout
