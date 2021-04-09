import React, { Component, useState } from 'react';
import StoryModal from './StoryModal';

class ItemStory extends Component {
 
    render() {
    
        return (
      
       <li>
            <a  uk-toggle>
              <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                <img src="assets/images/avatars/avatar-1.jpg" className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
              </div>
            </a>
            <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
              Dennis </a>
          </li>
    
           
     

        );
    }
}

export default ItemStory;