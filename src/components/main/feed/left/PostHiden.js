import React, { Component } from 'react';

class PostHiden extends Component {
    render() {
        return (
        <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0" id="toggle" hidden>
        {/* post header*/}
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
        <div className="w-full h-full">
          <iframe src="https://www.youtube.com/embed/pQN-pnXPaVg" frameBorder={0} uk-video="automute: true" allowFullScreen uk-responsive className="w-full lg:h-64 h-40" />
        </div>
        <div className="py-3 px-4 space-y-3"> 
          <div className="flex space-x-4 lg:font-bold">
            <a href="#" className="flex items-center space-x-2">
              <div className="p-2 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <div> Like</div>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <div className="p-2 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
              </div>
              <div> Comment</div>
            </a>
            <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <div> Share</div>
            </a>
          </div>
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
          <div className="border-t pt-4 space-y-4 dark:border-gray-600">
            <div className="flex">
              <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
              </div>
            </div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" />
                </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
            <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
            <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
              <a href="#"> <i className="uil-image" /></a>
              <a href="#"> <i className="uil-video" /></a>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default PostHiden;