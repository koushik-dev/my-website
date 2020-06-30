---
title: "We need a Twitter card to show off!!!"
author: "Koushik"
date: "2020-05-14T15:31:17.455Z"
path: "/blog/twittercard"
bannerImg: "./images/twitter card/twitter.jpg"
categories: ['twitter', 'meta-tags', 'site-construction']
---
![image](./images/twitter card/twitter1.jpg)  
Today i did something new. After completing the last post i posted it on twitter, then realized that it is not looking as other links are shown.  
\
So started debugging then found that twitter need some sort of `metaTag` to recognize it as link and display in the format we specify.  
\
The `gatsby-plugin-react-helmet` plugin is used to provide the necessary items in the `head` tag. I am having a `seo` a component which renders the `helmet` component.  
\
The `seo` component querys the `siteMetadata` as renders the necessary `metaTag` for the site. There created a slot for 
<br/>
- twitter:card
- twitter:image
- site url to be displayed  

\
**Obstacles Tackled**  
\
For twitter card, it is a static value which resembles the size of the card to display in the twitter when posted. I used `summary` which display small image in the left and summary in the right.  
\
For site url, provided the link in the `siteMetadata` which is queried through `graphql`.  
\
The final hurdle is providing dynamic image. For index page we can provide with some image, but for each blogpost page we need to provide respective images. Since the image takes a static url, i need to find a way to create static urls for dynamic images.  
\
Used the installed plugin to create a image fluid and tried providing the same to the image key. No Luck!.  
\
The realized that the images are having a dynamic name when created a build. To find that ramdomly generated name, need to use the `src` query inside the image fluid.  
\
With static siteurl as prefix and the randomly generated image name as suffix gives the static image url.  
\
Providing the above achieved url, Twitter is able to create a card with dynamic images for each page in the application.  
\
**P.S.**  
\
Psst!!! Since the meta tag creation is same for all the pages, we need to put it in common place something like `layout`. So that we don't need to render the `seo` separately in all the components we are creating in the course of the application contruction.
