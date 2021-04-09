import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
           
      <div>
      <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
        <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
        <p className="mb-2 text-black text-lg"> Email or Username</p>
        <form action>
          <input type="text" placeholder="example@mydomain.com" className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
          <input type="text" placeholder="***********" className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
          <div className="flex justify-between my-4">
            <div className="checkbox">
              <input type="checkbox" id="chekcbox1" defaultChecked />
              <label htmlFor="chekcbox1"><span className="checkbox-icon" />Remember Me</label>
            </div>
            <a href="#"> Forgot Your Password? </a>
          </div>
          <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
          <div className="text-center mt-5 space-x-2">
            <p className="text-base"> Not registered? <a href="form-register.html" className> Create a account </a></p>
          </div>
        </form>
      </div>
    </div>
  );
        
    }
}

export default LoginForm;