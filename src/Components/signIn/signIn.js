import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";  

import '../../style/signIn.css'

class signIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Pass: ''
        }
    }

    render() {
        return (
            <div className="signIn">
                
                    <div className="welcome__text">
                      <h1>Great to have you back!</h1>
                     <p>You can sign in with your existing Beholder account.</p>
                    </div>

                <div className="SignIn">


            
                    <div className="point">
                        <div>
                        <h1>Sign In</h1>
                        </div>
                    </div>

                    <form id="Form" onSubmit={this.writer}>

                        <div className="form__item">
                            <p>Email</p>
                            <input type="email" name="Email" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                        </div>

                        <div className="form__item">
                            <p>Password <Link to="/">Forgot</Link></p>
                            <input type="password" name="Pass" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                        </div>

                        <div className="form__item btn">
                            <button className="form__btn" >Sign In</button>
                        </div>

                        <p className="foot">New here? <Link to="/signUp" className="form__a">Create an Beholder Account</Link></p>   
                    </form>
                </div>
            </div>
        );
    }

    updateInputValue (event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
          });
    }

    writer = (event) => {
        event.preventDefault();
        console.log('Email: ' + this.state.Email);
        console.log('Password: ' + this.state.Pass);
    }
}

export default signIn
