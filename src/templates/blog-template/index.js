import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import styles from './index.module.css'
 
const Index = ({ data }) => {
    let { markdownRemark } = data;

    return (
      <Layout>
        <article className={styles.article}>
          <h1 className={styles.header}>{markdownRemark?.frontmatter?.title}</h1>
          <p dangerouslySetInnerHTML={{__html: markdownRemark.html}}></p>
          
          
          <div className={styles.authorCard}>
            <p>Author: {markdownRemark?.frontmatter?.author}</p>
          </div>
        </article>
      </Layout>
    )
}

export default Index

export const query = graphql`
query PostQuery {
    markdownRemark {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }      
`
