import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.css";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" twitterImage = "../images/suit.jpg" />
    <div className={styles.tileWrapper}>
      {data.frontmatter.edges.map((edge, i) => (
        <div key={i}>
          <Card
            frontmatter={edge.node.frontmatter}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  frontmatter: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    edges {
      node {
        frontmatter {
          title
          path
          bannerImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`