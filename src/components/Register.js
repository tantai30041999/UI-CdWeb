import React, { Component } from 'react';
import Footer from './footer/Footer';
import HeaderStart from './header/start/HeaderStart';
import RegisterForm from './main/RegisterForm';
class Register extends Component {
    render() {
        return (
           <div id="wrapper" class="flex flex-col justify-between h-screen">

                <HeaderStart/>
                <RegisterForm/>
                <Footer/>
            </div>
        );
    }
}

export default Register;