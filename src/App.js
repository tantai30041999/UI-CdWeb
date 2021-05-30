
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';
import HeaderStart from './components/header/start/HeaderStart';
import SlideBar from './components/slidebar/SlideBar';

function App() {

    return (
       <div id="wrapper">
               <HeaderStart/>
            <BrowserRouter>
            <Switch>

               <Route exact path="/" >
                  <LoginForm/>
               </Route >
               <Route exact path="/login" >
                  <LoginForm/>
               </Route >
               <Route exact path="/register">
                  <RegisterForm/>
               </Route>
            </Switch>
            </BrowserRouter>
        </div>
       //<SlideBar/>

    );
}

export default App;
