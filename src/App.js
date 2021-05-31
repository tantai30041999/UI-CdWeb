
import './App.css';
import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import LoginForm from './components/login/LoginForm'
import HeaderStart from './components/header/start/HeaderStart';
import RegisterForm from './components/login/RegisterForm'
import FeedMain from './components/main/FeedMain';


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
                </Switch>
            </BrowserRouter>
   







    );
}

export default App;
