import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Article = styled.article`
  line-height: 2;
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
`
const Category = styled.span`
  margin: 0 0 10px 10px;
  font-size: 0.9rem;
  background-color: gold;
  color: black;
  padding: 0 10px 0 20px;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
  &::after {
    content: "";
    position: absolute;
    border-radius: 100vh;
    top: 0;
    transform: translateY(50%);
    left: 5%;
    width: 10px;
    height: 10px;
    background: var(--bg-color);
  }
`

const header = css`
  text-align: center;
  margin: 10px 0;
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
        <h1
          css={css`
            ${header}
          `}
        >
          {markdownRemark?.frontmatter?.title}
        </h1>
        <p
          css={css`
            ${header}
          `}
        >
          {markdownRemark?.frontmatter?.author}
        </p>
        <p
          css={css`
            ${header}
          `}
        >
          {markdownRemark?.frontmatter?.date}
        </p>
        <p
          css={css`
            ${header}
          `}
        >
          {markdownRemark?.frontmatter?.categories.map((category, i) => (
            <Category key={i}>{category}</Category>
          ))}
        </p>
        <div
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
