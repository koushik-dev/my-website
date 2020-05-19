import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Article = styled.article`
  max-width: 80%;
  margin: auto;
  padding: 20px;
  box-shadow: 10px 0 10px -5px var(--shadow-color), -10px 0 10px -5px var(--shadow-color);
  height: calc(100% - 100px);
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  ul {
    padding: 0 1rem;
  }
  code {
    background-color: #ff84c1;
    color: white;
    font-size: 1.5rem;
    border-bottom: 2px solid #000;
    padding: 0 5px;
  }
  kbd {
    display: block;
    background: #eeeeee;
    padding: 10px;
    border-radius: 3px;
    border-color: red;
    border-width: 0 5px 0 5px;
    border-style: solid;
  }
`

const header = css`
  text-align: center;
  margin: 10px 0;`
 
const Index = ({ data }) => {
    let { markdownRemark } = data;

    return (
      <>
      <SEO title={markdownRemark?.frontmatter?.title} twitterImage={markdownRemark?.frontmatter?.bannerImg?.childImageSharp?.fluid?.src} customUrl={markdownRemark?.frontmatter?.path} />
      <Layout>
        <Article>
          <h1 css={css`${header}`}>{markdownRemark?.frontmatter?.title}</h1>
          <p css={css`${header}`}>{markdownRemark?.frontmatter?.author}</p>
          <p css={css`${header}`}>{markdownRemark?.frontmatter?.date}</p>
          <div dangerouslySetInnerHTML={{__html: `<p>${markdownRemark.html}</p>`}}></div>
        </Article>
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
        date(formatString: "DD MMM YYYY")
        title
        path
        bannerImg {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }      
`
