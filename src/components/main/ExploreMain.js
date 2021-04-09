import React, { Component } from 'react';
import Catagory from './explore/Catagory';
import ItemStoryMain from './explore/ItemStoryMain';
import ItemStoryV5 from './explore/ItemStoryV5';

import Load from './Load';
class ExploreMain extends Component {
    render() {
    
            return (

                <div className="container m-auto">
                  <h1 className="lg:lg:text-2xl text-lg text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-3"> Explore </h1>
                  
                  {/*Catogory*/}
                  <Catagory/>
                  <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 hover:text-yellow-700 uk-link-reset">
                  <ItemStoryV5/>
                    <div className="lg:col-span-2 lg:row-span-2">
                     
                     <ItemStoryMain/>
                    </div>
                    
                    <ItemStoryV5/>    
                    <ItemStoryV5/>
                    <ItemStoryV5/>
                    <ItemStoryV5/>
                    <ItemStoryV5/>     
                    <ItemStoryV5/>
                    <ItemStoryV5/>
                  </div>
                  {/* Load more*/}
                   <Load/>
                </div>
              );
        
    }
}

export default ExploreMain;