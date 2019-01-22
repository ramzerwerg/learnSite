import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

import SignUp from './Components/SignUp/signUp.js';
import Home from './Components/home/home.js';

import emblem from './style/img/emblem.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">

          <div className="header">

            <div className="header__left">
              <div className="header__emblem">
                <img src={emblem} className='header__img' />
              </div>
            </div>

            <div className="header__right">
              <div className="header__account">
                <a href="#" className="header__item account__create">Create account</a>
                <i className="far fa-user-circle fa-lg header__item"></i>
                <a href="#" className="header__item account__login">Sign in</a>
              </div>
            </div>

          </div>

          <div></div>
          
            <Switch>
              <Link to='/signUp'>Sign Up</Link>
              <Route path='/signUp' Component={SignUp} />
            </Switch>

          <Switch>
            <Route exact path='/' Component={Home} />
          </Switch>

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
