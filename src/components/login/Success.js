import React, { Component } from 'react';
import HeaderSuccess from '../header/start/HeaderSuccess';

class Success extends Component {
    render() {
        return (
            <div id="wrapper">
             <HeaderSuccess/>
             <form action="/home">
            <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
              <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Register successfully!</h1>
             
              <p>Please click below button to login</p>
              <br></br>
              <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login Now</button>
            </div>
            </form>
          </div>
        );
    }
}

export default Success;