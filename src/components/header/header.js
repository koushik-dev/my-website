import React, { useState } from 'react';
import './header.scss';
import logo from '../../logo.png';
import Navigation from './navigations/navigations';
import HeaderOverlay from './header-overlay/header-overlay';

function Header() {
    var [opened, changeState] = useState(false);
    function closeOverlay() {
        changeState(false)
    }
    return (
      <div>
        <div className="header flex p-1 md:p-3 items-center sticky overflow-hidden w-full top-0 shadow-md">
          <div className="header__logo__container">
            <img src={logo} alt="logo" className="header__logo" />
          </div>
          <article className="header__nav hidden md:block">
            <Navigation />
          </article>
          <div className="header__hamburger md:hidden flex justify-between items-end flex-col" onClick={(e) => {opened = changeState(!opened)}}>
          <span className="rounded-full"></span>
          <span className="rounded-full"></span>
          <span className="rounded-full"></span>
          </div>
        </div>
        {opened && <HeaderOverlay isVertical="false" closed={closeOverlay} />}
      </div>
    );
}

export default Header;