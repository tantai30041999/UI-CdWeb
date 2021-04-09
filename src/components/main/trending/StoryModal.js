import React, { Component } from 'react';

class StoryModal extends Component {
    render() {
        return (
         
        <div id="story-modal" className="uk-modal-container" uk-modal>
        <div className="uk-modal-dialog story-modal">
          <button className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white" type="button" uk-close />
          <div className="story-modal-media">
            <img src="assets/images/post/img4.jpg" alt="" className="inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
            {/* post header*/}
            <div className="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
              <div className="flex flex-1 items-center space-x-4">
                <a href="#">
                  <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                    <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                  </div>
                </a>
                <span className="block text-lg font-semibold"> Johnson smith </span>
              </div>
              <a href="#"> 
                <i className="icon-feather-more-horizontal text-2xl rounded-full p-2 transition -mr-1" />
              </a>
            </div>
            <div className="story-content p-4" data-simplebar>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
              <div className="py-4 ">
                <div className="flex justify-around">
                  <a href="#" className="flex items-center space-x-3">
                    <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Like</div>
                  </a>
                  <a href="#" className="flex items-center space-x-3">
                    <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Comment</div>
                  </a>
                  <a href="#" className="flex items-center space-x-3">
                    <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Share</div>
                  </a>
                </div>
                <hr className="-mx-4 my-3" />
                <div className="flex items-center space-x-3"> 
                  <div className="flex items-center">
                    <img src="assets/images/avatars/avatar-1.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                  </div>
                  <div>
                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                  </div>
                </div>
              </div>
              <div className="-mt-1 space-y-1">
                <div className="flex flex-1 items-center space-x-2">
                  <img src="assets/images/avatars/avatar-2.jpg" className="rounded-full w-8 h-8" />
                  <div className="flex-1 p-2">
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  </div>
                </div>
                <div className="flex flex-1 items-center space-x-2">
                  <img src="assets/images/avatars/avatar-4.jpg" className="rounded-full w-8 h-8" />
                  <div className="flex-1 p-2">
                    consectetuer adipiscing elit
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 border-t dark:border-gray-600">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full rounded-md relative">
                <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-8 shadow-none" />
                <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                  <a href="#"> <i className="uil-image" /></a>
                  <a href="#"> <i className="uil-video" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default StoryModal;