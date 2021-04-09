import React, { Component } from 'react';

class BodyPost extends Component {
    render() {
        return (
            <div uk-lightbox>
            <div className="grid grid-cols-2 gap-2 p-2">
              <a href="assets/images/post/img9.jpg" className="col-span-2">
                <img src="assets/images/post/img9.jpg" alt="" className="rounded-md w-full lg:h-76 object-cover" />
              </a>
              <a href="assets/images/post/img10.jpg">
                <img src="assets/images/post/img10.jpg" alt="" className="rounded-md w-full h-full" />
              </a>
              <a href="assets/images/post/img11.jpg" className="relative">
                <img src="assets/images/post/img11.jpg" alt="" className="rounded-md w-full h-full" />
                <div className="absolute bg-gray-900 bg-opacity-30 flex justify-center items-center text-white rounded-md inset-0 text-2xl"> + 15 more </div>
              </a>
            </div>
          </div>
        );
    }
}

export default BodyPost;