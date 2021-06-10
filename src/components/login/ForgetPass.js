import React, { Component } from 'react';
import HeaderSuccess from '../header/start/HeaderSuccess';
import emailjs from 'emailjs-com';
class ForgetPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
      email :"",
      error : "",
      correct : false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForget = this.submitForget.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.email)

  }
  sendEmail(e) {
    e.preventDefault();
    var template = {
      to_name :this.state.email,
      
    }
    emailjs.init('user_zfFXtbS2Tsyin0lfEgT5L')
    emailjs.send('service_4ha61ni','template_bq5zksw',template)
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    
  }
  submitForget(e) {

    e.preventDefault();
     this.checkExistEmail();
    if(this.state.error !="" ) {
      console.log("ABCD")
      return false;
    }else {
      this.sendEmail(e);

    }
  
    return true;
  }
  async checkExistEmail() {

    const url = "http://207.148.74.251:8080/nonauth/api/emailexisted?email=" + this.state.email;
    let data = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json;',
        'Authorization': 'Basic ' + btoa('admin:taibong123'),
      }),
    });

    let json = await data.json();
    var exist = json.existed;
    console.log(exist)
    if(exist == false) {
      var error = "Email not exist";
      this.setState({error})
    }else {
      var error = "";
      this.setState({error})
    }
  

  }

    render() {
        return (
            <div id="wrapper">
    
            <HeaderSuccess/>
            <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
              <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Forgot password</h1>

              <form onSubmit={this.submitForget}>
                <input type="email" placeholder="Email" name="email" onChange={this.handleChange} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                <span style={{color:'red'}}>{this.state.error}</span>
             
                <button  type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Forget</button>
                <div className="text-center mt-5 space-x-2">
                 
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default ForgetPass;