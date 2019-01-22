import React, { Component } from 'react';
import emblem from '../emblem.png';
import '../Css/App.css';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
class App extends Component {

  state = {
    isClick: false
  }

  render() {
    return (
      <div className="App">

        <header className="header">

          <div>
            <div className="header__emblem">
              <img src={emblem} className='header__img' />
            </div>
          </div>

          <div>
            <div className="header__account">
              <a href="#" className="header__item account__create">Create account</a>
              <i className="far fa-user-circle fa-lg header__item"></i>
              <a href="#" className="header__item account__login">Sign in</a>
            </div>
          </div>

        </header>

        <section className="welcome">

          <div className="welcome__item text">
            <h1>Great to see you here!</h1>
            <p>Create a Beholder account to search for new faces.</p>
          </div>

          {this.state.isClick ? <Signup2 /> : <Signup1 handleClick={this.handleClick} />}


        </section>

        <footer className="footer">
          <i className="fab fa-instagram footer__item"></i>
          <p className="footer__item">in</p>
          <p className="footer__item">2018 COPYRIGHT BEHOLDER. ALL RIGHT RESERVED</p>
        </footer>
      </div>

    );
  }

  handleClick = (value) => {
    this.setState({
      isClick: value
    })
  }

}

export default App;
