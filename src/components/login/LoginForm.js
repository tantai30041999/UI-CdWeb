import { sha256 } from 'js-sha256';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import HeaderStart from '../header/start/HeaderStart';
import {Cookies} from 'react-cookie';
const initialState = {

  email: "",
  password: "",
  erremail: "",
  errpassword: "",
  login: false

}

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);

  }
 getInfUser = async (email,password)=> {
   const url ="https://istg-clone.herokuapp.com/api/user/current";
   fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + btoa(email + ':' + password)
    }),
   }).then(response => response.json())
             .then(json => {
               var userInf = json;
               
                localStorage.setItem('userInf',JSON.stringify(userInf));
                console.log(userInf);
             })
}
  login = () => {
    const url = "https://istg-clone.herokuapp.com/api/user/login";  
    var header = new Headers();
    var encode = sha256(this.state.password);
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(this.state.email + ':' + encode),
       
      }),
    }).then(response =>   {
      
     
      if(response.ok) {
            var login = true;
            this.setState({login}) 
             localStorage.setItem('username', this.state.email);
             localStorage.setItem('password', encode);
             this.getInfUser(this.state.email, encode);  
                 
      }else {
        if(response.status == 401) {
             var login = false;

             var errpassword ="Username or password is incorrect";
             var email ="";
             var password = "";
             this.setState({ email })
             this.setState({password})
             this.setState({errpassword})
             this.setState({login})
        }
      }
    })
    
  }
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })
 

  }
  validationForm = () => {
    var erremail = "";
    let errpassword = "";
    var countErr = 0;
    if (this.state.email == "") {
      erremail = "Please input email";
      this.setState({ erremail })
      countErr++;
    } else {
      erremail = "";
      this.setState({ erremail })
    }
    if (this.state.password == "") {
      errpassword = "Please input password";
      this.setState({ errpassword })
    } else {
      errpassword = "";
      this.setState({ errpassword })
    }



    if (countErr > 0) {
      return false;
    }
    return true;
  }

  handleSubmitForm(event) {
    event.preventDefault();
    const isValidForm = this.validationForm();

    if (isValidForm) {
      this.login();

    }
    this.setState({ initialState });



  }
  render() {

    var login = this.state.login;
    if(login == true) {
     
      return <Redirect to="/feed"></Redirect>
    }
    return (
     
      <div id="wrapper">
    
        <HeaderStart />
        <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
          <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
          <p className="mb-2 text-black text-lg"> Email or Username</p>
          <form onSubmit={this.handleSubmitForm}>
            <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
            <span id="errEmail" style={{ color: 'red' }} >{this.state.erremail}</span>
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
            <span id="errPass" style={{ color: 'red' }} >{this.state.errpassword}</span>
            <div className="flex justify-between my-4">
              <div className="checkbox">
                <input type="checkbox" id="chekcbox1" defaultChecked />
                <label htmlFor="chekcbox1"><span className="checkbox-icon" />Remember Me</label>
              </div>
              <a href="/forget"> Forgot Your Password? </a>
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