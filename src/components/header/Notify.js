import React, { Component } from 'react';
import ItemNotify from './ItemNotify';

class Notify extends Component {
    render() {
        return (
           
                  /* Notification
                  <a href="#" className="header-links-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </a>
                  <div uk-drop="mode: click;offset: 4" className="header_dropdown">
                    <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
                      Notification </h4>
                    <ul className="dropdown_scrollbar" data-simplebar>
                       <ItemNotify/>
                       <ItemNotify/>
                       <ItemNotify/>
                       <ItemNotify/>
                       <ItemNotify/>
                    </ul>
                    <a href="#" className="see-all">See all</a>
                  </div> */


        <div uk-drop="mode: click;offset: 4" className="header_dropdown">
          <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
            Notification </h4>
          <ul className="dropdown_scrollbar" data-simplebar>
            <li>
              <a href="#">
                <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                </div>
                <div className="drop_content">
                  <p> <strong>Adrian Mohani</strong>  Lorem ipsum dolor cursus
                    <span className="text-link"> Adipiscing massa convallis</span>
                  </p>
                  <span className="time-ago"> 2 hours ago </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="drop_avatar"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                </div>
                <div className="drop_content">
                  <p>
                    <strong>Stella Johnson</strong> Nonummy nibh euismod
                    <span className="text-link"> Imperdiet doming </span>
                  </p>
                  <span className="time-ago"> 9 hours ago </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                </div>
                <div className="drop_content">
                  <p>
                    <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                    <span className="text-link"> Adipiscing massa convallis</span>
                  </p>
                  <span className="time-ago"> 12 hours ago </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                </div>
                <div className="drop_content">
                  <p>
                    <strong>Stella Johnson</strong> Nonummy nibh euismod
                    <span className="text-link"> Imperdiet doming </span>
                  </p>
                  <span className="time-ago"> Yesterday </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="drop_avatar"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                </div>
                <div className="drop_content">
                  <p>
                    <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                    <span className="text-link"> Adipiscing massa convallis</span>
                  </p>
                  <span className="time-ago"> 12 hours ago </span>
                </div>
              </a>
            </li>
          </ul>
          <a href="#" className="see-all">See all</a>
        </div>
            
        );
    }
}

export default Notify;