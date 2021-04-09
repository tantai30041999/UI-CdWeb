import React, { Component } from 'react';

class ItemCreateStory extends Component {
    render() {
        return (
            <li>
            <div className="relative bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
              <img src="assets/images/avatars/avatar-2.jpg" className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
              <a href="#" className=" bg-gray-400 p-2 rounded-full w-8 h-8 flex justify-center items-center text-white border-4 border-white absolute right-2 bottom-0 bg-blue-600">
                + </a>
            </div>
            <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
              You </a>
          </li>
        );
    }
}

export default ItemCreateStory;