---
title: "Where is that 🧐? Search!"
author: "Koushik"
date: "2020-05-21T11:17:42.881Z"
path: "/blog/searchblogs"
bannerImg: "./images/search/search.jpg"
categories: ['search', 'site-construction']
---
![image](./images/search/search.jpg)  
\
Having a search for blogs feature is a very small implementation. But i created this blog to share the issues i faced during doing the same.  
\
**Implementation**  
\
We are having all the blogs stored in a local variable. Now, using the search text i can filter out the matching blogs and show it in the dashboard.  
\
i created stored the cards result in a variables and used `map` to loop through to create the templates.  
\
Since we are iterating over an array to create templates, react requires a key to keep track of the changes to the array.  
\
i used `index` as key but it not advisable as a non-changing id should be used for key. If you use index and if and element is added to the front of the index, the entire array is considered as changed.  
\
Using `state` the get the value from the search input and by `useEffect` when the search state is changed, updated the cards array which is also using another `state`.  
\
*Why*  
\
The cards array is used to show the cards in the dashboard. It is a state variable. I am having a state variable for search. On updating the search state will trigger the respective `useEffect`. Inside the effect, i am updating the cards because that where i have the updated search text.  
\
**The flow**  
<br/>
- Type the text in the search field.
- It will update the `search` state variable.
- After updated, it will trigger the effect.
- Inside the effect, the cards array is updated.
- Then, the UI is updated with filtered cards.  

\
**Mischalaneous**  
<br>
- Changed the banner picture for twitter card blog.
- Fixed mobile layouts.