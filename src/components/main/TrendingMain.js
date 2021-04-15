import React, { Component } from 'react';
import ListExplore from './trending/ListExplore';
import ListStory from './trending/ListStory';
import ListSuggestion from './trending/ListSuggestion';
import StoryModal from './trending/StoryModal';
import Header from '../header/Header';
class TrendingMain extends Component {
  render() {
    return (
      <div className="main_content">
      <Header/>
        <div className="container m-auto">
          <div className="flex justify-between items-baseline lg:mr-8  uk-visible@s">
            <h1 className="font-extrabold leading-none mb-6 lg:text-2xl text-lg text-gray-900 tracking-tight"> Stories </h1>
            <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
          </div>
          {/* users*/}
          <ListStory />
          <div className="flex justify-between items-baseline uk-visible@s">
            <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> Suggestion
                </h1>
            <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
          </div>
          {/* Suggestion*/}
          <ListSuggestion />
          <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> Explore </h1>
          {/* Explore*/}
          <ListExplore />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default TrendingMain;