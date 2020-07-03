import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"

import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import 'bulma';

const Container = styled.div`
  background-color: var(--shadow-color);
  padding-top: 70px;
`

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.querySelector("body").classList.add("light")
  }, [])

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
      <Global
        styles={css`
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            height: 100%;
            font-family: poppins, sans-serif;
            color: var(--text-color);
          }
          .light {
            --bg-color: white;
            --shadow-color: #dde3fb;
            --text-color: #2e3739;
            --switch-color: orange;
            --switch-shadow: 12px 0 0 -5px var(--switch-color),
              -12px 0 0 -5px var(--switch-color),
              0 13px 0 -5px var(--switch-color),
              0 -13px 0 -5px var(--switch-color),
              9px 9px 0 -5px var(--switch-color),
              -9px -9px 0 -5px var(--switch-color),
              -9px 9px 0 -5px var(--switch-color),
              9px -9px 0 -5px var(--switch-color);
            --switch-content: null;
            --card-bg: #ffffff;
            --highlight-color: #5e6afa;
          }
          .dark {
            --bg-color: #3e3e3e;
            --shadow-color: #000000;
            --text-color: white;
            --switch-color: wheat;
            --switch-shadow: none;
            --switch-content: ${`''`};
            --card-bg: #222222;
            --highlight-color: #5a73d8;
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
        `}
      />
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
