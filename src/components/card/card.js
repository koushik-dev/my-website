import React from 'react'
import styles from "./card.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby";

const Card = ({ frontmatter }) => {
    return (
      <div className={styles.linkWrapper}>
        <Link to={frontmatter.path}>
          <div className={styles.cardContainer}>
            <Img fluid={frontmatter.bannerImg.childImageSharp.fluid} className={styles.image} />
            <p className={styles.content}>{frontmatter.title}</p>
          </div>
        </Link>
      </div>
    )
}

export default Card
