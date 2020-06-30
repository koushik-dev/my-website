---
title: "PWA, Bulma and stuffs."
author: "Koushik"
date: "2020-06-29T04:06:41.468Z"
path: "/blog/pwa"
bannerImg: "./images/pwa/pwa.jpg"
categories: ['PWA', 'css', 'site-construction']
---
![image](./images/pwa/pwa.jpg)
\
Let's make this a progressive web app. In gatsby, it is a single step of plugin installation.  
\
**Plugins**
\
`gatsby-plugin-offline`  
`gatsby-plugin-manifest`  
\
After installing the plugins, we need to refer these in the `gatsby-config` file. The reference should be in the order of `gatsby-plugin-manifest` followed by `gatsby-plugin-offline`.  
\
**Issues Faced**  
\
The header and footer component is rerendering again and again when navigating from dashboard to blogs and vice versa. This rerender causes the theme switcher not aligned with system theme. 

The issue is fixed by adding `gatsby-browser api` in `gatsby-browser` file. `wrapPageElement` api wraps the entire page element with a wrap element.  
\
**Mischalaneous**  
<br/>
- Added css framework `bulma`.
- Added meta tags using `og`.
- Box-shadow for the dashboard cards.
- Switching the current theme based on the system theme.  
\
See ya!😊