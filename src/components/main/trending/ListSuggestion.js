import React, { Component } from 'react';
import ItemSuggestion from './ItemSuggestion';

class ListSuggestion extends Component {
    render() {
        return (
            <div className="relative" uk-slider="finite: true">
            <div className="uk-slider-container pb-3 -ml-3">
              <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-small">
                  <ItemSuggestion/>
                  <ItemSuggestion/>
                  <ItemSuggestion/>
                  <ItemSuggestion/>
                  <ItemSuggestion/>
                  <ItemSuggestion/>
              </ul>
              <a className="uk-position-center-left uk-position-small p-3.5 bg-white rounded-full w-10 h-10 flex justify-center items-center -mx-4 mb-6 shadow-md dark:bg-gray-800 dark:text-white" href="#" uk-slidenav-previous uk-slider-item="previous" />
              <a className="uk-position-center-right uk-positsion-small p-3.5 bg-white rounded-full w-10 h-10 flex justify-center items-center -mx-4 shadow-md dark:bg-gray-800 dark:text-white" href="#" uk-slidenav-next uk-slider-item="next" />
            </div>
          </div>
        );
    }
}

export default ListSuggestion;