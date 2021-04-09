import React, { Component } from 'react';

class ProfileImage extends Component {
    render() {
        return (
            <div>
            <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">  
              <img src="assets/images/avatars/avatar-7.jpg" className="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />
              <div className="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                <a href="#" className="hover:text-white">
                  <i className="uil-camera" />
                </a>
                <a href="#" className="hover:text-white">
                  <i className="uil-crop-alt" />
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default ProfileImage;