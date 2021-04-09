import React, { Component } from 'react';
import MessageMain from './main/MessageMain';
import SlideBar from './slidebar/SlideBar';
import Header from './header/Header';
class Message extends Component {
    render() {
        return (
            <div id="wrapper">
            <SlideBar/>
            <div className="main_content">
               <Header/>
               <MessageMain/>
            </div>
        </div>
        );
    }
}

export default Message;