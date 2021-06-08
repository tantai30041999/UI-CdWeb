import React, { Component } from 'react';
import HeaderSuccess from '../header/start/HeaderSuccess';
class CoverForget extends Component {
    render() {
        return (
            <div id="wrapper">
    
           <HeaderSuccess/>
            <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
              <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Forgot password</h1>

              <form>
                <input type="text" placeholder="OTP code" name="email" className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
              
             
                <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Submit</button>
                <div className="text-center mt-5 space-x-2">
                 
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default CoverForget;