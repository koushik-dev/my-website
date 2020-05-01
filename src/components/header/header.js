import styles from "./header.module.css"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
