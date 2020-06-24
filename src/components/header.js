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
  position: fixed;
  z-index: 999;
  white-space: nowrap;
  a {
    text-decoration: none;
    color: var(--text-color);
  }
`

const Header = ({ siteTitle }) => (
  <HeaderTag className="px-4 py-3 level is-mobile">
    <Link to="/" className="level-left">
      <h1 className="is-size-4">{siteTitle}</h1>
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
