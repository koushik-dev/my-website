import React from "react"
import styles from "./footer.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Footer = ({ data }) => {
    const dats = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`);
    console.log(data)
  return (
    <>
      <footer className={styles.footer}>
  <h1>{data}</h1>
        <ul className={styles.links}>
          <li>Home</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer