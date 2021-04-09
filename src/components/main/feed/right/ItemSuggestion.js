import React, { Component } from 'react';

class ItemSuggestion extends Component {
    render() {
        return (
            <div className="flex items-center justify-between py-3">
            <div className="flex flex-1 items-center space-x-4">
              <a href="profile.html">
                <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 rounded-full w-10 h-10" />
              </a>
              <div className="flex flex-col">
                <span className="block capitalize font-semibold"> Johnson smith </span>
                <span className="block capitalize text-sm"> Australia </span>
              </div>
            </div>
            <a href="#" className="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Follow </a>
          </div>
        );
    }
}

export default ItemSuggestion;