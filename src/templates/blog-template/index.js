import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Article = styled.article`
  max-width: 80%;
  margin: auto;
  padding: 20px;
  height: calc(100% - 100px);
  background-color: var(--bg-color);
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  ul {
    padding: 0 1rem;
  }
  kbd {
    display: block;
    background: var(--shadow-color);
    color: var(--text-color);
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 3px;
    border-color: red;
    border-width: 0 5px 0 5px;
    border-style: solid;
  }
  strong {
    font-size: 1.5rem;
    color: var(--text-color);
  }
  ul {
    list-style-type: square;
  }
`
const Category = styled.span`
  margin: 10px;
  font-size: 0.9rem;
  background-color: gold;
  color: black;
  padding: 0 20px 0 0;
  display: inline-flex;
  align-items: center;
  clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
  &::before {
    content: "";
    margin: 0 5px 0 10px;
    border-radius: 100vh;
    width: 10px;
    height: 10px;
    background: var(--bg-color);
  }
`

const Index = ({ data }) => {
  let { markdownRemark } = data

  return (
    <>
      <SEO
        title={markdownRemark?.frontmatter?.title}
        twitterImage={
          markdownRemark?.frontmatter?.bannerImg?.childImageSharp?.fluid?.src
        }
        customUrl={markdownRemark?.frontmatter?.path}
      />
      <Article>
        <h1 className="has-text-weight-bold is-size-3 has-text-centered">
          {markdownRemark?.frontmatter?.title}
        </h1>
        <p className="has-text-centered">
          {markdownRemark?.frontmatter?.author}
        </p>
        <p className="has-text-centered">
          {markdownRemark?.frontmatter?.date}
        </p>
        <p className="has-text-centered has-text-weight-medium">
          {markdownRemark?.frontmatter?.categories.map((category, i) => (
            <Category key={i}>{category}</Category>
          ))}
        </p>
        <div css={css`line-height: 2`}
          dangerouslySetInnerHTML={{
            __html: `<p>${markdownRemark.html}</p>`,
          }}
        ></div>
      </Article>
    </>
  )
}

export default Index

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date(formatString: "DD MMM YYYY")
        title
        path
        categories
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
