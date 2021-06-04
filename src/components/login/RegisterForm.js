import React, { Component } from 'react';

import $ from 'jquery';
import { sha256 } from 'js-sha256';
import { Redirect } from 'react-router';
import HeaderStart from '../header/start/HeaderStart';



var sqlDatetime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
const initialState = {
  fname: "",
  lname: "",
  createDate: sqlDatetime,
  email: "",
  password: "",
  cfpassword: "",
  checkedTerms: "",
  err_fname: "",
  err_lname: "",
  err_email: "",
  err_password: "",
  err_cfpassword: "",
  err:"",
  err_checkedTerms: "",
  err_sameEmail: false,
  success: false,

}
class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }



  async handleChange(event) {


    var value = event.target.value;
    var nameTag = [event.target.name];


    await this.setState({
      [event.target.name]: event.target.value
    })


    var errtag = "";
    errtag = "err_" + nameTag;
    var err_email = ""
    // handle error

    if (nameTag == "email") {

      await this.checkExistEmail(value)
      console.log(this.state.err_sameEmail);
      
    }

    if (nameTag == "password") {
      if (value.length >= 8) {
        if (this.checkPassword(value)) {
          $("#" + errtag + "").text('');
        } else {
          $("#" + errtag + "").text('Passwords must contain at least 8 characters, including uppercase, lowercase letters and numbers');
        }
        if ($('input[name="cfpassword"]').val() != value) {
          $('#err_cfpassword').text('Password and confirmation password do not match');
        } else {
          $('#err_cfpassword').text('');
        }
      }
    } else {
      if (nameTag == "cfpassword") {
        if (value.length >= 8) {

          if ($('input[name="password"]').val() != value) {
            $('#err_cfpassword').text('Password and confirmation password do not match');
          } else {
            if ($('input[name="password"]').val() == value)

              $('#err_cfpassword').text('');
          }
        }
      } else {
        if (!this.isEmpty(value)) {
          $("#" + errtag + "").text('');
        }
      }
    }

  }

  validationForm = () => {

    let err_fname = "";
    let err_lname = "";
    let err_email = "";
    let err_password = "";
    let err_cfpassword = "";
    let err_checkedTerms = "";
    let countErr = 0;
    if (this.isEmpty(this.state.fname)) {
      err_fname = "Not empty";
      this.setState({ err_fname })
      countErr++;
    } else {
      err_fname = "";
      this.setState({ err_fname })
    }

    if (this.isEmpty(this.state.lname)) {
      err_lname = "Not empty";
      this.setState({ err_lname })
      countErr++;
    } else {
      err_lname = "";
      this.setState({ err_lname })
    }
    this.setState({ err_lname })

    if (this.isEmpty(this.state.email)) {

      err_email = "Incorrect email format"
      this.setState({ err_email });
      countErr++;
    } else {
      console.log(this.state.email)
      if (!this.validateEmail(this.state.email)) {
        err_email = "Incorrect email format"
        this.setState({ err_email });
        countErr++;
      } else {
        if (this.err_sameEmail) {
          err_email = "Email already exists";
          countErr++;
          this.setState({ err_email });
        }else {
          err_email = ""
          this.setState({ err_email });
        }
    
      }
    }
    
    var errTmp = 0;
    if (this.isEmpty(this.state.password) || this.state.password.length < 8) {
      err_password = "Passwords must contain at least 8 characters, including uppercase, lowercase letters and numbers"
      this.setState({ err_password });
      countErr++;
      errTmp++;
    } else {

      if (this.checkPassword(this.state.password)) {
        err_password = "";
        this.setState({ err_password });
      } else {
        err_password = "Passwords must contain at least 8 characters, including uppercase, lowercase letters and numbers";
        this.setState({ err_password });
      }

    }

    if (this.isEmpty(this.state.cfpassword) || this.state.cfpassword.length < 8) {
      err_cfpassword = "Passwords must contain at least 8 characters, including uppercase, lowercase letters and numbers"
      this.setState({ err_cfpassword });
      countErr++;
      errTmp++;

    } else {
      if (this.checkPassword(this.state.cfpassword)) {
        err_cfpassword = "";
        this.setState({ err_cfpassword });
      } else {
        err_cfpassword = "Passwords must contain at least 8 characters, including uppercase, lowercase letters and numbers";
        this.setState({ err_cfpassword });
      }
    }
    if (errTmp == 0) {
      if (this.state.password != this.state.cfpassword) {
        err_cfpassword = "Password and confirmation password do not match"
        this.setState({ err_cfpassword });
        countErr++;
      } else {
        err_cfpassword = ""
        this.setState({ err_cfpassword });
      }
    }

    if ($('#chekcbox1').is(':checked') == false) {
      countErr++;
      err_checkedTerms = "Please check Terms";
      this.setState({
        err_checkedTerms
      })

    }
    if (countErr > 0) {
      return false;
    }
    return true;

  }

  checkPassword(input) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }

 async validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  isEmpty(inputValue) {
    return (inputValue == "") ? true : false;
  }

  showError(existed) {
    if(existed) {
      return "Email already existed";
    }else {
      return "";
    }
  }
  async checkExistEmail(email) {

    const url = "http://207.148.74.251:8080/nonauth/api/emailexisted?email=" + email;
    let data = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json;',
        'Authorization': 'Basic ' + btoa('admin:taibong123'),
      }),
    });

    let json = await data.json();
    var err_sameEmail = json.existed;
    var err_email ="";
    await this.setState({ err_sameEmail })
    if(this.state.err_sameEmail == true) {
     err_email = "Email already existed";
       await this.setState({err_email})
      
    }else {
      err_email = "";
      await this.setState({err_email})
    }
    console.log(this.state.err_email)

  }


  addNewUser(data) {
    const url = "http://207.148.74.251:8080/api/user/create";
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa('admin:taibong123'),
      }),
      body: data

    }).then(response => response.json())
      .then(json => console.log(json));
  }
  handleSubmitForm(event) {

    event.preventDefault();
    const isValidForm = this.validationForm();
    var date = sqlDatetime.substring(0, 10);



    if (isValidForm) {

      var encodePass = sha256(this.state.password);
  
      var data = {
        "id": null,
        "username": this.state.email,
        "displayName": this.state.lname + " " + this.state.fname,
        "bio": null,
        "email": this.state.email,
        "phone": null,
        "gender": null,
        "createdAt": date,
        "deletedAt": null,
        "activated": 1,
        "avatar": null,
        "privateUser": 0,
        "password": encodePass
      }


      var tmp = JSON.stringify(data);
      console.log(tmp);
      if (tmp.length > 0) {
        this.addNewUser(tmp);
        this.setState({
          success: true,
        })
      } else {
        this.setState(initialState);
      }
    }
  }
  render() {
    var signUp = this.state.success;
    var existed = this.state.err_sameEmail;
   

    if (signUp == true) {
      return <Redirect to="/login" />
    }
    return (
    
      <div id="wrapper">
      <HeaderStart/>
        <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
          <h1 className="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
          <p className="mb-2 text-black text-lg"> Register to manage your account </p>
          <form onSubmit={this.handleSubmitForm}>
            <div className="flex lg:flex-row flex-col lg:space-x-2">
              <input type="text" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />

              <span id="err_fname" style={{ color: 'red', }} >{this.state.err_fname}</span>
              <input type="text" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
              <span id="err_lname" style={{ color: 'red', }} >{this.state.err_lname}</span>
            </div>

            <input type="email" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                  
     
            <span id="err_email" style={{ color: 'red' }} >{this.state.err_email}</span>
            <p style={{color:'red'}}>{this.showError(existed)}</p>
          
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
            <span id="err_password" style={{ color: 'red' }} >{this.state.err_password}</span>
            <input type="password" placeholder="Confirm Password" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
            <span id="err_cfpassword" style={{ color: 'red' }} >{this.state.err_cfpassword}</span>
            <div className="flex justify-start my-4 space-x-1">
              <div className="checkbox">
                <input type="checkbox" id="chekcbox1" name="checkedTerms" onChange={this.handleChange} />
                <label htmlFor="chekcbox1"><span className="checkbox-icon" /> I Agree</label>
              </div>
              <a href="#"> Terms and Conditions</a>
              <span style={{ color: 'red' }}>&nbsp; {this.state.err_checkedTerms}</span>
            </div>
            <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Register</button>
            <div className="text-center mt-5 space-x-2">
              <p className="text-base"> Do you have an account? <a href="/login"> Login </a></p>
            </div>
          </form>
        </div>
      </div>
    );

  }
}

export default RegisterForm;