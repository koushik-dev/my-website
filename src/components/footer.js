import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  box-shadow: 0 -4px 5px var(--shadow-color);
  background-color: white;
  height: 50px;
`

const Links = styled.ul`
  list-style-type: none;
  justify-self: end;
  display: flex;
  li {
    margin: 0 10px;
  }
`

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }`);
  return (
    <>
      <FooterWrapper>
        <Links>
          <li>{data?.site?.siteMetadata?.author}</li>
          <li>&copy; Copyrights Reserved.</li>
        </Links>
      </FooterWrapper>
    </>
  )
}

export default Footer