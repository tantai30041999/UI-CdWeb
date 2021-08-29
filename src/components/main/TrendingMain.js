import React, { Component } from 'react';
import ListExplore from './trending/ListExplore';
import ListStory from './trending/ListStory';
import ListSuggestion from './trending/ListSuggestion';
import StoryModal from './trending/StoryModal';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
import { Redirect } from 'react-router';
class TrendingMain extends Component {
  render() {
    if(localStorage.getItem('username') == null && localStorage.getItem('password') == null) {
      return <Redirect to="/home"></Redirect>}
    else {
      return (
     
        <div id="wrapper">
                <SlideBar language = {this.props.language} />
        <div  className="main_content">
        <Header  getLanguage={this.props.getLanguage}/>
        <div className="container m-auto">
          <div className="flex justify-between items-baseline lg:mr-8  uk-visible@s">
            <h1 className="font-extrabold leading-none mb-6 lg:text-2xl text-lg text-gray-900 tracking-tight"> {this.props.language.stories} </h1>
            <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
          </div>
          {/* users*/}
          <ListStory />
          <div className="flex justify-between items-baseline uk-visible@s">
            <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> {this.props.language.suggestion}
                </h1>
            <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
          </div>
          {/* Suggestion*/}
          <ListSuggestion />
          <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> {this.props.language.explore} </h1>
          {/* Explore*/}
          <ListExplore />
        </div>
        </div>
        </div>
     
    );
    }
  
  }
}

export default TrendingMain;