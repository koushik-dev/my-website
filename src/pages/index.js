import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import styled from "@emotion/styled"
import 'bulma';

const TileWrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 50px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  justify-content: center;
  justify-items: center;
  min-height: calc(100vh - 120px);
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`

const Input = styled.input`
  margin: 50px auto 0;
  @media screen and (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
`

const IndexPage = ({ data }) => {
  let [search, setSearch] = useState(''),
      [cards, setCards] = useState(data.frontmatter.edges.slice(0));

  useEffect(() => {
    setCards(data.frontmatter.edges.filter(edge => edge.node.frontmatter.title.toLowerCase().includes(search)))
  }, [search, data])

  const onSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <Layout>
      <SEO title="Home" twitterImage={data.image?.fluid?.src} />
      <Input type="text" className="input column is-one-third" placeholder="Type to search" name="search" value={search} onChange={onSearch}></Input>
      <TileWrapper>
        {cards.map((edge, i) => (
          <div key={i}>
            <Card frontmatter={edge.node.frontmatter} />
          </div>
        ))}
      </TileWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  frontmatter: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          path
          categories
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
  },
  image: imageSharp(fluid: {originalName: {eq: "suit.jpg"}}) {
    fluid {
      src
    }
  }
}
`