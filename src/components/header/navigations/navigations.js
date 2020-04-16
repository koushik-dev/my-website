import React from 'react';
import './navigations.scss';

function Navigation(props) {
    return (
     <div className="navigation">
         <ul className={"md:grid md:grid-cols-3 text-center"}>
             <li className={"col-span-1" + props.isVertical ? "my-5" : "my-0"}><a href="/articles" className="">Articles</a></li>
             <li className={"col-span-1" + props.isVertical ? "my-5" : "my-0"}><a href="!#" className="">Products</a></li>
             <li className={"col-span-1" + props.isVertical ? "my-5" : "my-0"}><a href="/contact" className="">Contact</a></li>
         </ul>
     </div>   
    )
}

export default Navigation;