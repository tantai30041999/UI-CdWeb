import React, { Component } from 'react';

class ItemNotify extends Component {
    render() {
        return (
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
        );
    }
}

export default ItemNotify;