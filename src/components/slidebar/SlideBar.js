import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';

import TrendingMain from '../main/TrendingMain';
import FeedMain from '../main/FeedMain';
import ExploreMain from '../main/ExploreMain';
import MessageMain from '../main/MessageMain';
import ProfileMain from '../main/ProfileMain';
import LoginForm from '../login/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header';

class SlideBar extends Component {
      constructor(props) {
          super(props) 
          this.state  = {
            userInfo :  JSON.parse(localStorage.getItem('userInf')),
           
          }
          // this.clearData = this.clearData.bind(this);
      
      }
  //  async   clearData() {
  //     await  window.localStorage.clear();
      
  //     }

  render() {

   
     var language = this.props.language;
      
    return (
      <div className="sidebar">
        <div className="sidebar_header border-b border-gray-200 from-gray-100 to-gray-50 bg-gradient-to-t  uk-visible@s">
          <a href="#">
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo-light.png" className="logo_inverse" />
          </a>
          {/* btn night mode */}
          <a href="#" id="night-mode" className="btn-night-mode" data-tippy-placement="left" title="Switch to dark mode" />
        </div>
        <div className="border-b border-gray-20 flex justify-between items-center p-3 pl-5 relative uk-hidden@s">
          <h3 className="text-xl"> Navigation </h3>
          <span className="btn-mobile" uk-toggle="target: #wrapper ; cls: sidebar-active" />
        </div>
        <div className="sidebar_inner" data-simplebar>
          <div className="flex flex-col items-center my-6 uk-visible@s">
            <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transition m-0.5 mr-2  w-24 h-24">
              <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border-4 border-white rounded-full w-full h-full" />
            </div>
            <a href="profile.html" className="text-xl font-medium capitalize mt-4 uk-link-reset">{this.state.userInfo.displayName}
              </a>
            <div className="flex justify-around w-full items-center text-center uk-link-reset text-gray-800 mt-6">
              <div>
                <a href="#">
                  <strong>{language.post}</strong>
                  <div> 130</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <strong>{language.following}</strong>
                  <div> 1,230</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <strong>{language.followers}</strong>
                  <div> 2,430</div>
                </a>
              </div>
            </div>
          </div>
          <hr className="-mx-4 -mt-1 uk-visible@s" />
          <ul>
            <li className="active">
              <Link to="/feed" >
                
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span> {language.feed} </span>
              </Link>
            </li>
            <li>
            <Link to="/explore">
          
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span> {language.explore} </span> 
                </Link>
            </li>
         
            <li>
            <Link to="/messages">
             
                <i className="uil-location-arrow" />
                <span> {language.messages} </span> <span className="nav-tag"> 3</span>
            </Link>
            </li>
            <li>
            <Link to="/trending">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <span> {language.trending} </span> 
            </Link>
            </li>

            <li>
              <a href="setting.html">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span> {language.settings} </span>
              </a>
              <ul>
                <li><a href="setting.html">General </a></li>
                <li><a href="setting.html"> Account setting </a></li>
                <li><a href="setting.html">Billing <span className="nav-tag">3</span> </a></li>
              </ul>
            </li>
            <li>
              <Link to="/profile">
       
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span> {language.profile} </span> 
                </Link>
            </li>
            <li>
              <hr className="my-2" />
            </li>
            <li >
               <Link to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span> {language.logout} </span>
                </Link>
            </li>
          </ul>
        </div>
      </div>

    );
    }

  }


export default SlideBar;