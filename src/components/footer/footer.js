import React from "react"
import styles from "./footer.module.css"
import { graphql, useStaticQuery } from "gatsby"

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
      <footer className={styles.footer}>
        <ul className={styles.links}>
          <li>{data?.site?.siteMetadata?.author}</li>
          <li>&copy; Copyrights Reserved.</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer