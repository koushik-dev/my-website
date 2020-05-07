import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.css";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.tileWrapper}>
      {data.frontmatter.edges.map((edge, i) => (
        <div key={i}>
          <Card
            fluid={data.placeholderImage.childImageSharp.fluid}
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
  placeholderImage: file(relativePath: {eq: "suit.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  frontmatter: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`