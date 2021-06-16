
import './App.css';
import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';
import LoginForm from './components/login/LoginForm'
import HeaderStart from './components/header/start/HeaderStart';
import RegisterForm from './components/login/RegisterForm'
import FeedMain from './components/main/FeedMain';
import ExploreMain from './components/main/ExploreMain';
import MessageMain from './components/main/MessageMain';
import TrendingMain from './components/main/TrendingMain';
import ProfileMain from './components/main/ProfileMain';
import ForgetPass from './components/login/ForgetPass';
import CoverForget from './components/login/CoverForget';
import React from 'react';
import * as i18n from './components/translations/i18n';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            language :"",
        }
        this.getLanguageCode = this.getLanguageCode.bind(this);
    }

    
    componentDidMount() {
        this.initialLanguage();
    }
    initialLanguage (){
        this.setState({language: i18n.TRANSLATIONS_UK})
   }
 async getLanguageCode (code) {
    var language = "";
    if(code == "Vietnamese") {
         language = i18n.TRANSLATIONS_VN;
    }
    if(code =="English") {
         language = i18n.TRANSLATIONS_UK;
    }
    if(code =="Japan") {
         language = i18n.TRANSLATIONS_JP
    }
      await this.setState({language})


  }

    render() {

        return (
             
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" >
                        <LoginForm />
                    </Route >
                    <Route exact path="/home" >
                        <LoginForm />
                    </Route >
                    <Route exact path="/register">
                        <RegisterForm />
                    </Route>

                    <Route exact path="/forget">
                        <ForgetPass />
                    </Route>
                    <Route exact path="/coverforget">
                        <CoverForget />
                    </Route>
                    <Route exact path="/feed">
                        <FeedMain getLanguage={this.getLanguageCode} language={this.state.language}/>
                    </Route>
                    <Route  exact path="/explore">
                        <ExploreMain getLanguage={this.getLanguageCode} language={this.state.language}/>
                    </Route>
                    <Route  exact path="/messages">
                        <MessageMain getLanguage={this.getLanguageCode} language={this.state.language}/>
                    </Route>
                    <Route exact path="/trending">
                        <TrendingMain getLanguage={this.getLanguageCode} language={this.state.language}/>
                    </Route>
                    <Route exact path="/profile">
                        <ProfileMain getLanguage={this.getLanguageCode} language={this.state.language}/>
                    </Route>
                   
                </Switch>
            </BrowserRouter>


    );

    }
  
}

export default App;
