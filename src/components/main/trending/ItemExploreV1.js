import React, { Component } from 'react';

class ItemExploreV1 extends Component {
    render() {
        return (
        
            <div className="bg-red-400 max-w-full lg:h-60 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
              <a href="#story-modal" uk-toggle>
                <img src="assets/images/post/img8.jpg" className="w-full h-full absolute object-cover inset-0" />
              </a>
              <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10">
                <img src="assets/images/icon-play.svg" alt="" className="w-16 h-16 -mt-5" />
              </a>
              <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
                <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                  <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                    <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8" />
                  </div>
                  <div> James Lewis </div>
                </a>
                <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                  <a href="#"> <i className="uil-heart" /> 150 </a>
                  <a href="#"> <i className="uil-heart" /> 30 </a>
                </div>
              </div>
         
          </div>
        );
    }
}

export default ItemExploreV1;