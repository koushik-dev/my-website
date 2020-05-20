import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import styled from "@emotion/styled"
import ThemeSwitcher from "./ThemeSwitcher"

const HeaderTag = styled.header`
  background-color: var(--bg-color);
  height: 70px;
  width: 100%;
  box-shadow: 0 4px 5px var(--shadow-color);
  color: var(--text-color);
  padding: 10px 20px;
  position: fixed;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  white-space: nowrap;
  a {
    text-decoration: none;
    color: var(--text-color);
  }
`

const Heading = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderTag>
    <Link to="/">
      <Heading>{siteTitle}</Heading>
    </Link>
    <ThemeSwitcher />
  </HeaderTag>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
