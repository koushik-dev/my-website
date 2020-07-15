---
title: "Using Emotion as CSS-in-JS"
author: "Koushik"
date: "2020-05-18T04:36:24.401Z"
path: "/blog/cssinjs"
bannerImg: "./images/cssinjs/emotion.png"
categories: ['css', 'emotion', 'site-construction']
---
![image](./images/cssinjs/emotion.png)  
\
Change every component in to emotion styled component.  
\
The need to change every css to emotion styled components is having several advantages.  
<br/>
- Able to manage everything in single file.
- When a component is removed corresponding css also removed.
- Since components are created as chunk, it can be exported and reused.
- Global is exported by emotion which can be used to provide global styles for the site.

\
**Common Issues**  
After installing `gatsby-plugin-emotion` to use emotion in our application, i faced a issue.  
\
<kbd>Can't resolve '@emotion/core' in '/Users/you/tmp/gatsby-site/.cache'</kbd>  
\
These is because with gatsby plugin, the emotion core `@emotion/core` and `@emotion/styled` packages has to be installed.  
\
Changed the folder structures, since we don't need a separate file for css anymore.  

\
**Mischalaneous**
- Formatted the date displayed in the post page from graphql.
- Fixed mobile layout issues.
- Dashboard layout is changed from `flex` to `grid` to control the alignment of the last row tiles.
