import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <div className="lg:mb-5 py-3 uk-link-reset">
              <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
                <div className="flex space-x-2 text-gray-700 uppercase">
                  <a href="#"> About</a>
                  <a href="#"> Help</a>
                  <a href="#"> Terms</a>
                  <a href="#"> Privacy</a>
                </div>
                <p className="capitalize"> © copyright 2020 by Instello</p>
              </div>
            </div>
          );
    }
}

export default Footer;