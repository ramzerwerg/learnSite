import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

import SignUp from './Components/SignUp/signUp.js';
import SignIn from './Components/signIn/signIn';
import Home from './Components/home/home.js';

import emblem from './style/img/emblem.png';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <div className="header">

            <div className="header__left">
              <div className="header__emblem">
                <Link to='/'>
                <img src={emblem} className='header__img' />
                </Link>
               </div>
            </div>

            <div className="header__right">
              <div className="header__account">
                <Link to="/signUp" className="header__item account__create">Create account</Link>
                <i className="far fa-user-circle fa-lg header__item"></i>
                <Link to="/signIn" className="header__item account__login">Sign in</Link>
              </div>
            </div>
          </div>

          <div className="render__item">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/signIn' component={SignIn} />
          </Switch>
          </div>

          <div className="footer">
            <i className="fab fa-instagram footer__item"></i>
            <p className="footer__item">in</p>
            <p className="footer__item">2018 COPYRIGHT BEHOLDER. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </Router>


    );
  }

}

export default App;
