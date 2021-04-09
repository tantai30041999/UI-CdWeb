import React, { Component } from 'react';
import ExploreMain from './main/ExploreMain';
import Header from './header/Header';
import SlideBar from './slidebar/SlideBar';
class Explore extends Component {
    render() {
        return (
            <div id="wrapper">
                <SlideBar/>
                <div className="main_content">
                   <Header/>
                   <ExploreMain/>
                </div>
            </div>
        );
    }
}

export default Explore;