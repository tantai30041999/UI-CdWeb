import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (

            <div>

<div id="logo" className=" uk-hidden@s">
                    <a href="home.html">
                      <img src="assets/images/logo-mobile.png" alt="" />
                      <img src="assets/images/logo-mobile-light.png" className="logo_inverse" />
                    </a>
                  </div> 
                  <div className="triger" uk-toggle="target: #wrapper ; cls: sidebar-active">
                    <i className="uil-bars" />
                  </div> 
                  <div className="header_search">
                    <input type="text" placeholder="Search.." />
                    <div className="icon-search">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
            </div>
     
          );
    }
}

export default Search;