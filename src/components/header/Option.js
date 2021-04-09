import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
           
                  <div uk-drop="mode: click;offset:9" className="header_dropdown profile_dropdown border-t">
                    <ul>
                      <li><a href="#"> Account setting </a> </li>
                      <li><a href="#"> Payments </a> </li>
                      <li><a href="#"> Help </a> </li>
                      <li><a href="form-login.html"> Log Out</a></li>
                    </ul>
                  </div>
         
        );
    }
}

export default Option;