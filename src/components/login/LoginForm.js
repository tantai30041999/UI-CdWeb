import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    let login = false
    this.state = {
      email :"",
      password :"",
      err_email :"",
      err_password :"",
      login
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);

  }

  validationForm() {
    let err_email = "";
    let err_password ="";
    var countErr = 0;
    if(this.state.email =="") {
      err_email ="Please input email"
      countErr++;
    }else {
      err_email =""
    }
    this.setState({
      err_email
    })

    if(this.state.password =="") {
      err_password ="Please input password"
      countErr++;
    }else {
      err_password =""
    }
    this.setState({
      err_password
    })
    if(countErr > 0) {
      return false;
    }
    return true;
  }
  login = () =>{
      const url ="http://207.148.74.251:8080/api/user/login";
      fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Basic ' + btoa('admin:taibong123'),
        }),
       
    
      
    }).then(res=> console.log(res))
  }
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitForm(event) {
    event.preventDefault();
    const isValid = this.validationForm;
    if(isValid) {
      this.login();
    }else {

    }
  

  }
    render() {
        return (
           
      <div >
      <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
        <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
        <p className="mb-2 text-black text-lg"> Email or Username</p>
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" placeholder="Email"  name="email" onChange={this.handleChange}  value={this.state.email} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
          <span id="errEmail" style={{ color: 'red' }} >{this.state.err_email}</span>
          <input type="text" placeholder="Password" name="password" onChange={this.handleChange}  value={this.state.password} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{border: '1px solid #d3d5d8 !important'}} />
          <span id="errPass" style={{ color: 'red' }} >{this.state.err_password}</span>
          <div className="flex justify-between my-4">
            <div className="checkbox">
              <input type="checkbox" id="chekcbox1" defaultChecked />
              <label htmlFor="chekcbox1"><span className="checkbox-icon" />Remember Me</label>
            </div>
            <a href="#"> Forgot Your Password? </a>
          </div>
          <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
          <div className="text-center mt-5 space-x-2">
            <p className="text-base"> Not registered? <a href="/register" className> Create a account </a></p>
          </div>
        </form>
      </div>
    </div>
  );
        
    }
}

export default LoginForm;