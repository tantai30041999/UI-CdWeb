import React, { Component } from 'react';

class Catagory extends Component {
    render() {
        return (
            <div className="lg:m-0 -mx-5 flex justify-between items-center py-2 relative space-x-3 dark-tabs" uk-sticky="cls-active: bg-gray-100 bg-opacity-95; media : @m ; media @m">
            <div className="flex overflow-x-scroll lg:overflow-hidden lg:pl-0 pl-5 space-x-3 lg:py-2">
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Shop</a>
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Travel </a>
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Fitness</a>
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Technology</a>
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Music </a>
              <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Architecture</a>
            </div>
          </div>
        );
    }
}

export default Catagory;