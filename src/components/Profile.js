import React, { Component } from 'react';
import ProfileMain from './main/ProfileMain';
import Header from './header/Header';
import SlideBar from './slidebar/SlideBar';
class Profile extends Component {
    render() {
        return (
            <div id="wrapper">
            <SlideBar/>
            <div className="main_content">
               <Header/>
               <ProfileMain/>
            </div>
        </div>
        );
    }
}

export default Profile;