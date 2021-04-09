import React, { Component } from 'react';

class HeaderPost extends Component {
    render() {
        return (
            <div className="flex justify-between items-center px-4 py-3">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                </div>
              </a>
              <span className="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
            </div>
            <div>
              <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
              <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                      <i className="uil-share-alt mr-1" /> Share
                              </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                      <i className="uil-edit-alt mr-1" />  Edit Post
                              </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                      <i className="uil-comment-slash mr-1" />   Disable comments
                              </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                      <i className="uil-favorite mr-1" />  Add favorites
                              </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2 dark:border-gray-800" />
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                      <i className="uil-trash-alt mr-1" />  Delete
                              </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default HeaderPost;