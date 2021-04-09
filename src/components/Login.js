import React, { Component } from 'react';
import HeaderStart from './header/start/HeaderStart';
import LoginForm from './main/LoginForm';
import Footer from './footer/Footer'

class Login extends Component {
    render() {
        return (
            <div id="wrapper" class="flex flex-col justify-between h-screen">

                <HeaderStart />
                <LoginForm />
                <Footer/>
            </div>

        );
    }
}

export default Login;