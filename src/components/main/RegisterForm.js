import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (

            <div>
              <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                <h1 className="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
                <p className="mb-2 text-black text-lg"> Register to manage your account </p>
                <form action>
                  <div className="flex lg:flex-row flex-col lg:space-x-2">
                    <input type="text" placeholder="First Name" className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
                    <input type="text" placeholder="Last Name" className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
                  </div>
                  <input type="text" placeholder="Email" className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
                  <input type="text" placeholder="Password" className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
                  <input type="text" placeholder="Confirm Password" className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
                  <div className="flex justify-start my-4 space-x-1">
                    <div className="checkbox">
                      <input type="checkbox" id="chekcbox1" defaultChecked />
                      <label htmlFor="chekcbox1"><span className="checkbox-icon" /> I Agree</label>
                    </div>
                    <a href="#"> Terms and Conditions</a>
                  </div>
                  <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
                  <div className="text-center mt-5 space-x-2">
                    <p className="text-base"> Do you have an account? <a href="form-login.html"> Login </a></p>
                  </div>
                </form>
              </div>
            </div>
          );
      
    }
}

export default RegisterForm;