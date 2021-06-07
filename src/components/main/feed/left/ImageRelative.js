import React, { Component } from 'react';

class ImageRelative extends Component {
    render() {
        return (
             <a href="assets/images/post/img11.jpg" className="relative">
                <img src="assets/images/post/img11.jpg" alt="" className="rounded-md w-full h-full" />
                <div className="absolute bg-gray-900 bg-opacity-30 flex justify-center items-center text-white rounded-md inset-0 text-2xl"> + 15 more </div>
              </a> 
        );
    }
}

export default ImageRelative;