---
title: "Lights on !!! ☀️"
author: "Koushik"
date: "2020-05-20T04:03:11.270Z"
path: "/blog/theming"
bannerImg: "./images/theme/banner.jpg"
---
![image](./images/theme/banner.jpg)  
\
Let's setup a theme for the site we are building. Since i have seen many site providing the option to switch theme, we also going to do the same.  
\
**ICON**  
\
Initially had an idea of having a toggle button which shows sun at oneside and moon at other and thought that's a bit lot of work which is unwanted at this stage. Finally ended up creating one at codepen.  
\
[Theme Switcher Icon](https://codepen.io/koushik27/pen/NWGeKPz)  
\
**Gatsby-Themes**  
\
You can find quite a lot of `gatsby-themes` in the store. But i didn't really needed a package for my requirement. I just need to switch colors for the theme. Setting variables with different values in two classes *light* and *dark*.
\
**Implementation**  
\
I need just to change the color not the font-size not anyother style. So i created a component called `ThemeSwitcher` which will hold the theme switch button and toggle `dark` on switching the theme. The theme switch component is added inside the header component.  
\
**ISSUES**  
<br>
- Not able toggle class on body since `document` is not defined. Figured out that i was trying to get the document before render so moved it inside the *`componentDidMount`* lifecycle.  
<br/>
- Since i'm using `emotion` components, i tried to pass a prop to switch between light and dark. But it is passed on first time alone. Changing the theme doesn't update the prop of the document.  
  - Need to find another way to change the icon on changing the theme.
  - So clicking the icon will add a `dark` class to the body.
  - The `dark` holds set of colors assigned to css variables which will switch the color throughout the application.
  - The same class holds the ***box-shadow***, ***color*** and ***pseudo element content*** for the icon. Hence adding a class to the body will change the icon and theme of the application.

\
**Mischalaneous**  
<br>
- Added a *background color* to content area.
- Changed the *box-shadow* of the header and footer.
- Fixed header text alignment in mobile view.

\
That's all folks!