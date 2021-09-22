import React, { Component } from 'react';
import InfoCommon from './profile/InfoCommon';
import ListHighStory from './profile/ListHighStory';
import ListExplore from './trending/ListExplore';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
import { Redirect } from 'react-router';
class ProfileMain extends Component {
  render() {

   
    if(localStorage.getItem('username') == null && localStorage.getItem('password') == null) {
      return <Redirect to="/home"></Redirect>}
    else {
      return (

        <div id="wrapper">
          <SlideBar language = {this.props.language} />
          <div className="main_content">
          <Header  getLanguage={this.props.getLanguage}/>
            <div className="container pro-container m-auto">
              {/* profile-cover*/}
              <InfoCommon language = {this.props.language}/>
              
  
              <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-8">{this.props.language.highths} </h1>
              <ListHighStory language = {this.props.language}/>
              <div className="flex items-center justify-between mt-8 space-x-3">
                <h1 className="flex-1 font-extrabold leading-none lg:text-2xl text-lg text-gray-900 tracking-tight uk-heading-line"><span>{this.props.language.explore}</span></h1>
                <div className="bg-white border border-2 border-gray-300 divide-gray-300 divide-x flex rounded-md shadow-sm dark:bg-gray-100">
                  <a href="#" className="bg-gray300 flex h-10 items-center justify-center  w-10" data-tippy-placement="top" title="Grid view"> <i className="uil-apps" /></a>
                  <a href="#" className="flex h-10 items-center justify-center w-10" data-tippy-placement="top" title="List view"> <i className="uil-list-ul" /></a>
                </div>
              </div>
  
              <ListExplore />
  
  
            </div>
          </div>
        </div>
      );
    }
 

  }
}

export default ProfileMain;