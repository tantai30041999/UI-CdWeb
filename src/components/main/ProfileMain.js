import React, { Component } from 'react';
import InfoCommon from './profile/InfoCommon';
import ListHighStory from './profile/ListHighStory';
import ListExplore from './trending/ListExplore';
import Header from '../header/Header';
class ProfileMain extends Component {
    render() {
        return (
        

                <div className="container pro-container m-auto">
                  {/* profile-cover*/}
                  <InfoCommon/>
            
                  <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-8"> Highths </h1>
                  <ListHighStory/>
                  <div className="flex items-center justify-between mt-8 space-x-3">
                    <h1 className="flex-1 font-extrabold leading-none lg:text-2xl text-lg text-gray-900 tracking-tight uk-heading-line"><span>Explore</span></h1>
                    <div className="bg-white border border-2 border-gray-300 divide-gray-300 divide-x flex rounded-md shadow-sm dark:bg-gray-100">
                      <a href="#" className="bg-gray300 flex h-10 items-center justify-center  w-10" data-tippy-placement="top" title="Grid view"> <i className="uil-apps" /></a>
                      <a href="#" className="flex h-10 items-center justify-center w-10" data-tippy-placement="top" title="List view"> <i className="uil-list-ul" /></a>                        
                    </div>
                  </div>

                  <ListExplore/>
           
                
                </div>
             
              );
        
    }
}

export default ProfileMain;