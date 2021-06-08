import React, { Component } from 'react';
import HeaderSuccess from '../header/start/HeaderSuccess';
class ChangePass extends Component {
    render() {
        return (
            <div id="wrapper">
    
            <HeaderSuccess/>    
            <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
              <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
              <p className="mb-2 text-black text-lg"> Email or Username</p>
              <form >
                <input type="password" placeholder="New password" name="password" className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                <span id="errEmail" style={{ color: 'red' }} ></span>
                <input type="password" placeholder="Re-password" name="re-password" className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                <span id="errPass" style={{ color: 'red' }} ></span>
                
                <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Update</button>
              
              </form>
            </div>
          </div>
        );
    }
}

export default ChangePass;