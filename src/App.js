
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


function App() {

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
                    <Route exact path="/feed">
                        <FeedMain/>
                    </Route>
                    <Route  exact path="/explore">
                        <ExploreMain/>
                    </Route>
                    <Route  exact path="/messages">
                        <MessageMain/>
                    </Route>
                    <Route exact path="/trending">
                        <TrendingMain/>
                    </Route>
                    <Route exact path="/profile">
                        <ProfileMain/>
                    </Route>
                </Switch>
            </BrowserRouter>
   







    );
}

export default App;
