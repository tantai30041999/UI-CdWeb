import React, { Component } from 'react';

class ProfileOption extends Component {
     
  constructor(props) {
    super(props)
  }



    render() {
      var language = this.props.language;
    
        return (
            <div className="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
            <a href="#" className="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700">{language.addStory}</a>
            <a href="#" className="bg-pink-500 shadow-sm p-2 pink-500 px-6 rounded-md text-white hover:text-white hover:bg-pink-600">{language.editInf}</a>
            <div>
              {/* <a href="#" className="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700"> 
                <i className="icon-feather-chevron-down" /> 
              </a> */}
              {/* <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900" uk-drop="mode: click">
                <ul className="space-y-1">
                  <li> 
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-user-minus mr-2" />Unfriend
                    </a> 
                  </li>
                  <li> 
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-eye-slash  mr-2" />Hide Your Story
                    </a> 
                  </li>
                  <li> 
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-share-alt mr-2" /> Share This Profile
                    </a> 
                  </li>
                  <li>
                    <hr className="-mx-2 my-2  dark:border-gray-700" />
                  </li>
                  <li> 
                    <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                      <i className="uil-stop-circle mr-2" /> Block
                    </a> 
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        );
    }
}

export default ProfileOption;