/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, customUrl, twitterImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: `${site.siteMetadata.siteUrl}/${customUrl || ''}`
        },
        {
          name: 'og:title',
          content: title
        },
        {
          name: 'og:description',
          content: metaDescription
        },
        {
          name: 'og:image',
          content: `${site.siteMetadata.siteUrl}${twitterImage}`
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: 'twitter:creator',
          content: '@koushikrsk'
        },
        {
          name: "twitter:image",
          content: `${site.siteMetadata.siteUrl}${twitterImage}`
        },
        {
          name: 'twitter:site',
          content: `${site.siteMetadata.siteUrl}/${customUrl || ''}`
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
