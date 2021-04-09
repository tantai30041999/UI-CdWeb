import React, { Component } from 'react';

class InforPost extends Component {
    render() {
        return (
            <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img src="assets/images/avatars/avatar-1.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
              <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
            </div>
            <div className="dark:text-gray-100">
              Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
            </div>
          </div>
        );
    }
}

export default InforPost;