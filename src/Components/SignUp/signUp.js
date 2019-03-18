import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";  
import '../../style/signUp.css'

import point1 from '../../style/img/1-(2).png';
import point2 from '../../style/img/(1)-2.png';

class signUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondStep: false,
            firstStep: true,
            Fullname:'#',
            Company:'#',
            Email:'#',
            Pass:'#'
        };
    }

    render() {
        const stepTwo = this.state.secondStep &&
            <div className="welcome__item signup signup2">

                <div className="point">
                    <div>
                        <h1>Sign up</h1>
                    </div>

                    <div className="fpoint">
                        <img src={point2}></img>
                    </div>
                </div>

                <form className="form" onSubmit={this.writerOneStep}>

                    <div className="form__item">
                        <p>Password</p>
                        <input type="password" name="Pass" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                    </div>

                    <div className="form__item">
                        <p>Cornfirm password</p>
                        <input type="password" className="form__input" required></input>
                    </div>

                    <div className="form__item">
                        <input type="button" className='form__btn' onClick={this.writerOneStep} value="Set Up Your Account"></input>
                    </div> 

                </form>
            </div>

        const stepOne = this.state.firstStep &&
            <div className="welcome__item signup">
                <div className="point">
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <div className="fpoint">
                        <img src={point1}></img>
                    </div>
                </div>

                <form className="form" onSubmit={this.writerOneStep}>

                    <div className="form__item">
                        <p>Full name</p>
                        <input type="fullname" name="Fullname" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                    </div >

                    <div className="form__item">
                        <p>Company</p>
                        <input type="company" name="Company" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                    </div>

                    <div className="form__item">
                        <p>Email</p>
                        <input type="email" name="Email" className="form__input" onChange={event => this.updateInputValue(event)} required></input>
                    </div>

                    <div className="form__item">
                        <input type="checkbox" id="1" className="checkbox cbid" required></input>
                        <label for="1">       By creating an account you agree to our <a href="#" className="form__a">Privacy Policy</a></label>
                    </div>

                    <div className="form__item">
                        <input type="checkbox" id="2" className="checkbox cbid" required></input>
                        <label for="2">       By creating an account to agree our <a href="#" className="form__a">Terms and Conditions</a></label>
                    </div>

                    <div className="form__item">
                        <input type="submit" className='form__btn' onClick={this.handleSubmit} value="Set Up Your Account"></input>
                    </div> 

                    <p>Already a Beholder member? <Link to="/signIn" className="form__a">Log in</Link></p>
                </form>
            </div>

        return (
            <section className="welcome">

                <div className="welcome__item welcome__text">
                    <h1>Great to see you here!</h1>
                    <p>Create a Beholder account to search for new faces.</p>
                </div>
                {stepOne}
                {stepTwo}
            </section>
        );
    }

    handleSubmit = () => {
        this.setState({
            secondStep: !this.state.isClick,
            firstStep: false
        })
    }

    updateInputValue (event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
          });
    }

    writerOneStep = () => {
        console.log('FullName: ' + this.state.Fullname);
        console.log('Company: ' + this.state.Company);
        console.log('Email: ' + this.state.Email);
        console.log('Password: ' + this.state.Pass);
    }
}

export default signUp;
