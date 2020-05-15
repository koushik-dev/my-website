
import PropTypes from "prop-types"
import React from "react"

import { Link } from 'gatsby'
import styled from '@emotion/styled'

const HeaderTag = styled.header`
    background-color: white;
    height: 70px;
    box-shadow: 0 4px 5px var(--shadow-color);
    color: #000;
    padding: 10px 20px;
    a {
      text-decoration: none;
      color: var(--text-color);
    }
`

const Header = ({ siteTitle }) => (
  <HeaderTag>
    <Link to="/"><h1>{siteTitle}</h1></Link>
  </HeaderTag>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
