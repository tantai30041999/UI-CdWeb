import React, { Component } from 'react';

class ItemChat extends Component {
    render() {
        return (
            <li>
            <a href="#" className="block flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="w-12 h-12 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" className="absolute h-full rounded-full w-full" />
                <span className="absolute bg-green-500 border-2 border-white bottom-0 h-3 m-0.5 right-0 rounded-full shadow-md w-3" />
              </div>
              <div className="flex-1 min-w-0 relative text-gray-500">
                <h4 className="text-black font-semibold dark:text-white">David Peterson</h4>
                <span className="absolute right-0 top-1 text-xs">Sun</span>
                <p className="truncate">Esmod tincidunt ut laoreet</p>
              </div>
            </a>
          </li>
        );
    }
}

export default ItemChat;