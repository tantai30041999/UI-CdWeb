import React, { Component } from 'react';
import Catagory from './explore/Catagory';
import ItemStoryMain from './explore/ItemStoryMain';
import ItemStoryV5 from './explore/ItemStoryV5';
import Header from '../header/Header';
import Load from './Load';
import SlideBar from '../slidebar/SlideBar';
import { Label } from 'reactstrap';
import Language from '../header/Language';
import { Redirect } from 'react-router';

class ExploreMain extends Component {
  render() {
    var language = this.props.language;
    if(localStorage.getItem('username') == null && localStorage.getItem('password') == null) {
      return <Redirect to="/home"></Redirect>}
    else {
      return (
      
        
        <div>
          <div id="wrapper">
          <SlideBar language = {language} />
            <div className="main_content">
            <Header  getLanguage={language}/>
              <div className="container m-auto">
                <h1 className="lg:lg:text-2xl text-lg text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-3"> {language.explore} </h1>
              
                {/*Catogory*/}
                <Catagory />
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 hover:text-yellow-700 uk-link-reset">
                  <ItemStoryV5 />
                  <div className="lg:col-span-2 lg:row-span-2">
  
                    <ItemStoryMain />
                  </div>
  
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                  <ItemStoryV5 />
                </div>
                {/* Load more*/}
                {/* <Load /> */}
              </div>
            </div>
          </div>
        </div>
      );
    }


  }
}

export default ExploreMain;