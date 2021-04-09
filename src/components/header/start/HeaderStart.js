import React, { Component } from 'react';

class HeaderStart extends Component {
    render() {
        return (

            <div className="bg-white py-4 shadow dark:bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center lg:justify-between justify-around">
                  <a href="trending.html">
                    <img src="assets/images/logo.png" alt="" className="w-32" />
                  </a>
                  <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                    <a href="form-login.html" className="py-3 px-4">Login</a>
                    <a href="form-register.html" className="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white">Register</a>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default HeaderStart;