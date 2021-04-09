import React, { Component } from 'react';
import Header from './header/Header';
import FeedMain from './main/FeedMain';
import SlideBar from './slidebar/SlideBar';

class Feed extends Component {
    render() {
        return (
            <div id="wrapper">
                <SlideBar/>
                <div className="main_content">
                   <Header/>
                   <FeedMain/>
                </div>
            </div>
        );
    }
}

export default Feed;