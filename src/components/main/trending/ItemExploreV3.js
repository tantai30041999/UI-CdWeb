import React, { Component } from 'react';

class ItemExploreV3 extends Component {
    render() {
        return (
          
            <div className="bg-red-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
              <a href="#story-modal" uk-toggle>
                <img src="assets/images/post/img2.jpg" className="w-full h-full absolute object-cover inset-0 scale-150 transform" />
              </a>
              <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
                <a href="profile.html" className="lg:flex flex-1 items-center hidden">
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

export default ItemExploreV3;