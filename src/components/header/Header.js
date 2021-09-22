import React, { Component } from 'react';
import Message from './Message';
import Notify from './Notify';
import Search from './Search';
import Upload from './Upload';
import Option from './Option';

class Header extends Component {
         constructor(props) {
           super(props)

         }
      
  render() {
 


    return (
      <div>
      <header>
      <div className="header_inner">
        <div className="left-side">
          {/* Logo */}
          <div id="logo" className=" uk-hidden@s">
            <a href="home.html">
              <img src="assets/images/logo-mobile.png" alt="" />
              <img src="assets/images/logo-mobile-light.png" className="logo_inverse" />
            </a>
          </div>
          <div className="triger" uk-toggle="target: #wrapper ; cls: sidebar-active">
            <i className="uil-bars" />
          </div>
          <div className="header_search">
            <input type="text" placeholder="" />
            <div className="icon-search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="right-side lg:pr-4">
          {/* upload */}
          <a href="#" className="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 mr-4 px-4 py-2 rounded shado text-white">
            <ion-icon name="add-circle" className="-mb-1
                           mr-1 opacity-90 text-xl uilus-circle" /> Upload
          </a>
          {/* upload dropdown box */}
          <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small" className="header_dropdown">
            {/* notivication header */}
            <div className="px-4 py-3 -mx-5 -mt-4 mb-5 border-b">
              <h4>Upload Video</h4>
            </div>
            {/* notification contents */}
            <div className="flex justify-center flex-center text-center dark:text-gray-300">
              <div className="flex flex-col choose-upload text-center">
                <div className="bg-gray-100 border-2 border-dashed flex flex-col h-24 items-center justify-center relative w-full rounded-lg dark:bg-gray-800 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                  </svg>
                </div>
                <p className="my-3 leading-6"> Do you have a video wants to share us <br /> please upload her ..
                </p>
                <div uk-form-custom>
                <div className="uk-form-custom" uk-form-custom="">
                  <input type="file" />
                  <a href="#" className="button soft-warning small"> Choose file</a>
                </div>
                <a href="#" className="uk-text-muted mt-3 uk-link" uk-toggle="target: .choose-upload ;  animation: uk-animation-slide-right-small, uk-animation-slide-left-medium; queued: true">
                  Or Import Video </a>
              </div>
              </div>
              <div className="uk-flex uk-flex-column choose-upload" hidden>
                <div className="mx-auto flex flex-col h-24 items-center justify-center relative w-full rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12">
                    <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="my-3 leading-6"> Import videos from YouTube <br /> Copy / Paste your video link here </p>
                <form className="uk-grid-small" uk-grid>
                  <div className="uk-width-expand">
                    <input type="text" className="uk-input uk-form-small  bg-gray-200 dark:bg-gray-700" style={{boxShadow: 'none'}} placeholder="Paste link" />
                  </div>
                  <div className="uk-width-auto"> <button type="submit" className="button soft-warning -ml-2">
                      Import </button> </div>
                </form>
                <a href="#" className="uk-text-muted mt-3 uk-link" uk-toggle="target: .choose-upload ; animation: uk-animation-slide-left-small, uk-animation-slide-right-medium; queued: true">
                  Or Upload Video </a>
              </div>
            </div>
            <div className="px-4 py-3 -mx-5 -mb-4 mt-5 border-t text-sm dark:border-gray-500 dark:text-gray-500">
              Your Video size Must be Maxmium 999MB
            </div>
          </div>
          {/* Notification */}
          <a href="#" className="header-links-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </a>
          <div uk-drop="mode: click;offset: 4" className="header_dropdown">
            <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
              Notification </h4>
            <ul className="dropdown_scrollbar" data-simplebar>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <p> <strong>Adrian Mohani</strong>  Lorem ipsum dolor cursus
                      <span className="text-link"> Adipiscing massa convallis</span>
                    </p>
                    <span className="time-ago"> 2 hours ago </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <p>
                      <strong>Stella Johnson</strong> Nonummy nibh euismod
                      <span className="text-link"> Imperdiet doming </span>
                    </p>
                    <span className="time-ago"> 9 hours ago </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <p>
                      <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                      <span className="text-link"> Adipiscing massa convallis</span>
                    </p>
                    <span className="time-ago"> 12 hours ago </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <p>
                      <strong>Stella Johnson</strong> Nonummy nibh euismod
                      <span className="text-link"> Imperdiet doming </span>
                    </p>
                    <span className="time-ago"> Yesterday </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <p>
                      <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                      <span className="text-link"> Adipiscing massa convallis</span>
                    </p>
                    <span className="time-ago"> 12 hours ago </span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#" className="see-all">See all</a>
          </div>
          {/* Messages */}
          <a href="#" className="header-links-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </a>
          <div uk-drop="mode: click;offset: 4" className="header_dropdown">
            <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
              Messages </h4>
            <ul className="dropdown_scrollbar" data-simplebar>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> John menathon </strong> <time> 6:43 PM</time>
                    <p> Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> Zara Ali </strong> <time>12:43 PM</time>
                    <p>  Sediam nonummy nibh euismod tincidunt laoreet dolore</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> Mohamed Ali </strong> <time> Wed </time>
                    <p> Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> John menathon </strong> <time> Sun</time>
                    <p> Namliber tempor cumsoluta nobis eleifend option adipiscing </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> Zara Ali </strong> <time> Fri</time>
                    <p> Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div className="drop_content">
                    <strong> Mohamed Ali </strong> <time>1 Week ago</time>
                    <p>  Sediam nonummy nibh euismod tincidunt laoreet dolore</p>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#" className="see-all">See all</a>
          </div>
          {/* profile */}
          <a href="#">
            <img src="assets/images/germany.png" className="header-avatar" alt="" />
          </a>
            <Option getLanguage={this.props.getLanguage}/>
        </div>
      </div>
    </header>
    </div>
      
    );
  }
}

export default Header;