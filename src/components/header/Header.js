import React, { Component } from 'react';
import Message from './Message';
import Notify from './Notify';
import Search from './Search';
import Upload from './Upload';
import Option from './Option';

class Header extends Component {
  render() {
    return (

      <header>
        <div className="header_inner">
          <div className="left-side">
            <Search />
          </div>
         
            <div className="right-side lg:pr-4">

              {/* upload */}
              <a href="#" className="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 mr-4 px-4 py-2 rounded shado text-white">
                <ion-icon name="add-circle" className="-mb-1
                                   mr-1 opacity-90 text-xl uilus-circle" /> Upload
              </a>
              <Upload />
              {/* Notification */}
              <a href="#" className="header-links-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </a>
              <Notify />
              {/* Messages */}
              <a href="#" className="header-links-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </a>
              <Message />

              {/* profile */}
              <a href="#">
                <img src="assets/images/avatars/avatar-2.jpg" className="header-avatar" alt="" />
              </a>
              <Option />
            </div>
          </div>
      
      </header>
    );
  }
}

export default Header;