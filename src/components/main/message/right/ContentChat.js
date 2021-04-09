import React, { Component } from 'react';

class ContentChat extends Component {
    render() {
        return (
            <div className="lg:p-8 p-4 space-y-5">
            <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
            {/* my message*/}
            <div className="flex lg:items-center flex-row-reverse">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                <p className="leading-6">consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore magna <i className="uil-grin-tongue-wink" /> </p>
                <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
              </div>
            </div>
            <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
            <div className="flex lg:items-center">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-gray-700 py-2 px-3 rounded bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-700 dark:text-white">
                <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-700" />
              </div>
            </div>
            {/* my message*/}
            <div className="flex lg:items-center flex-row-reverse">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" /></p>
                <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
              </div>
            </div>
            <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
            <div className="flex lg:items-center flex-row-reverse">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                <p className="leading-6">consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore magna.</p>
                <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
              </div>
            </div>
            <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
            <div className="flex lg:items-center">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-gray-700 py-2 px-3 rounded bg-gray-100 relative h-full lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-700 dark:text-white">
                <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-700" />
              </div>
            </div>
            {/* my message*/}
            <div className="flex lg:items-center flex-row-reverse">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                <p className="leading-6">quis nostrud exerci tation ullamcorper suscipit .</p>
                <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
              </div>
            </div>
            <div className="flex lg:items-center">
              <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
              </div>
              <div className="text-gray-700 py-2 px-3 rounded bg-gray-100 relative h-full lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-700 dark:text-white">
                <div className="flex space-x-0.5 my-2 animate-pulse">  
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        );
    }
}

export default ContentChat;