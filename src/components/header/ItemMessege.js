import React, { Component } from 'react';

class ItemMessege extends Component {
    render() {
        return (
           
                 <li>
                        <a href="#">
                          <div className="drop_avatar"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                          </div>
                          <div className="drop_content">
                            <strong> John menathon </strong> <time> 6:43 PM</time>
                            <p> Lorem ipsum dolor sit amet, consectetur </p>
                          </div>
                        </a>
                      </li>  
           
        );
    }
}

export default ItemMessege;