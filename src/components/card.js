import React from 'react'

import Img from "gatsby-image"
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const LinkWrapper = styled.div`
  min-height: 300px;
  min-width: 350px;
  margin: 10px;
  transition: transform 0.5s ease;
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 768px) {
    min-width: 300px;
  }
`
const CardContainer = styled.div`
  height: 275px;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px var(--shadow-color);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`
const Content = styled.p`
  margin: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Card = ({ frontmatter }) => {
    return (
      <LinkWrapper>
        <Link to={frontmatter.path}>
          <CardContainer>
            <Img fluid={frontmatter.bannerImg.childImageSharp.fluid} css={css`height:220px`} />
            <Content>{frontmatter.title}</Content>
          </CardContainer>
        </Link>
      </LinkWrapper>
    )
}

export default Card
