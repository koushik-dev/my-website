import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const LinkWrapper = styled.div`
  min-height: 300px;
  margin: 10px;
  transition: transform 0.5s ease;
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.03);
  }
`
const CardContainer = styled.div`
  background-color: var(--card-bg);
  min-height: 275px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 20px 10px -15px var(--text-color);
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: none;
  }
`
const Content = styled.p`
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Category = styled.span`
  margin: 0 10px 10px 10px;
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

const Card = ({ frontmatter }) => {
  return (
    <LinkWrapper>
      <Link to={frontmatter.path}>
        <CardContainer>
          <Img
            fluid={frontmatter?.bannerImg?.childImageSharp?.fluid}
            css={css`
              height: 220px;
            `}
          />
          <Content>{frontmatter.title}</Content>
          {frontmatter?.categories?.map((category, i) => (
            <Category key={i}>{category}</Category>
          ))}
        </CardContainer>
      </Link>
    </LinkWrapper>
  )
}

export default Card
