import React, { Component } from 'react';
import fon from './fon.jpg';
import emblem from './emblem.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <div className="emblem head">
              <img src={emblem} className='i-emblem' />
            </div>
          </div>
          <div>
            <div className='account head'>
              <i class="far fa-user-circle"></i>
            </div>
          </div>
        </div>
        <img src={fon} className="fon" />
      </div>
    );
  }
}

export default App;
