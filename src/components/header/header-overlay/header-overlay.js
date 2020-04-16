import React from 'react';
import './header-overlay.scss';
import Navigation from '../navigations/navigations';

function HeaderOverlay(props) {
    return (
      <div className="overlay absolute h-screen bg-gray-400 w-full top-0 p-5 text-center">
        <span onClick={props.closed} className="text-right material-icons rounded-full p-3 border-2 border-dotted border-gray-600">clear</span>
        <div className="md:hidden grid content-center justify-center text-2xl font-medium">
          <Navigation isVertical="true" />
        </div>
      </div>
    );
}
export default HeaderOverlay;