import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import styles from './index.module.css'
import SEO from '../../components/seo'
 
const Index = ({ data }) => {
    let { markdownRemark } = data;

    return (
      <>
      <SEO title={markdownRemark?.frontmatter?.title} twitterImage={markdownRemark?.frontmatter?.bannerImg?.absolutePath} customUrl={markdownRemark?.frontmatter?.path} />
      <Layout>
        <article className={styles.article}>
          <h1 className={styles.header}>{markdownRemark?.frontmatter?.title}</h1>
          <p className={styles.header}>{markdownRemark?.frontmatter?.author}</p>
          <p className={styles.header}>{markdownRemark?.frontmatter?.date}</p>
          <div dangerouslySetInnerHTML={{__html: `<p>${markdownRemark.html}</p>`}}></div>
        </article>
      </Layout>
      </>
    )
}

export default Index

export const query = graphql`
query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        author
        date
        title
        path
        bannerImg {
          absolutePath
        }
      }
    }
  }      
`
