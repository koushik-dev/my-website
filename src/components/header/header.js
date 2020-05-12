import styles from "./header.module.css"
import PropTypes from "prop-types"
import React from "react"

import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link to="/"><h1>{siteTitle}</h1></Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
