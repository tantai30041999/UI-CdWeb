import React, { Component } from 'react';
import LeftMessage from './message/LeftMessage';
import RightMessage from './message/RightMessage';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
import { ChatEngine } from 'react-chat-engine';
class MessageMain extends Component {
  render() {

    return (

      <div id="wrapper">
        <SlideBar />
        <div className="main_content">
          <Header />
          <div className="container m-auto pt-5">
            {/* <h1 className="font-semibold lg:mb-6 mb-3 text-2xl"> Messages</h1>
            <div className="lg:flex lg:shadow lg:bg-white lg:space-y-0 space-y-8 rounded-md lg:-mx-0 -mx-5 overflow-hidden lg:dark:bg-gray-800">
              <LeftMessage />
              <RightMessage />
            </div> */}
            <ChatEngine
                projectID='53f4a1bf-30a3-4aa8-849c-7e87f2491fee'
                userName='admin@example.com'
                userSecret='0e8717691cc36c56ed2e2cd5e3dba11e61de135c900d92e8d7e8d28ab46dd8b9'
              />
          </div>
        </div>
      </div>
    );

  }
}

export default MessageMain;