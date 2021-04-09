import React, { Component } from 'react';

class ItemSuggestion extends Component {
    render() {
        return (
            <li>
            <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
              <a href="profile.html">
                <img src="assets/images/post/img7.jpg" className="w-full h-full absolute object-cover inset-0" />
              </a>
              <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
              <div className="absolute bottom-0 p-4 w-full custom-overly1">
                <div className="flex justify-between align-bottom flex-wrap text-white">
                  <div className="w-full truncate text-lg"> John Michael </div>
                  <div className="leading-5 text-sm">
                    <div> 21, Turkey </div>
                    <div> Male </div>
                  </div>
                  <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
    }
}

export default ItemSuggestion;