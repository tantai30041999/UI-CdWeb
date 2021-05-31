import React, { Component } from 'react';
import LeftFeed from './feed/LeftFeed';
import RightFeed from './feed/RightFeed';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
class FeedMain extends Component {
    render() {
        return (
            <div>
            <div id="wrapper">
               <SlideBar/>
              <div className="main_content">
                <Header/>
                <div className="container m-auto">
                  <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>
                  <div className="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
                    {/* left sidebar*/}
                      <LeftFeed/>
                    {/* right sidebar*/}
                      <RightFeed/>
                  </div>               
                </div>
              </div>
            </div>
          
          </div>
              );
        
    }
}

export default FeedMain;