import React, { Component } from 'react';
import ItemCreateStory from './ItemCreateStory';
import ItemStory from './ItemStory';

class ListStory extends Component {
    render() {
        return (
            <div>

<div className="relative uk-visible@s" uk-slider="finite: true">
              <a className="-left-2 absolute bg-white bottom-1/2 flex items-center justify-center p-2 rounded-full shadow text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left" /> </a>
              <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 right-4 rounded-full shadow text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right" /></a>
              <div className="uk-slider-container pb-3 lg:mr-3">
                <ul className="uk-slider-items uk-grid uk-grid-small">
                
                    <ItemCreateStory/>
                      <ItemStory/>
                      <ItemStory/> 
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                      <ItemStory/>
                </ul>
              </div>
            </div> 
            </div>
                    
     
            
        );
    }
}

export default ListStory;