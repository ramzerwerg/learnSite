import React, { Component } from 'react';
import point1 from '../1-(2).png'

class Signup1 extends Component {

    state = {
        isClick: true
    }

    render() {
        return (
            <div className="welcome__item signup">
                <div className="point">
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <div className="fpoint">
                        <img src={point1}></img>
                    </div>
                </div>

                <form className="form" onSubmit="return validate()">

                    <div className="form__item">
                        <p>Full name</p>
                        <input type="fullname" className="form__input" required></input>
                    </div >

                    <div className="form__item">
                        <p>Company</p>
                        <input type="company" className="form__input" required></input>
                    </div>

                    <div className="form__item">
                        <p>Email</p>
                        <input type="email" className="form__input" required></input>
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
                        <button type="submit" className="form__btn" onClick={() => {
                                this.props.handleClick(this.state.isClick)
                        }}>Set Up Your Account</button>
                    </div>

                    <p>Already a Beholder member? <a className="form__a" href="#">Log in</a></p>
                </form>
            </div>
        );
    }
        
    validate = () => {
        const checkInput = document.forms["form"]["name"].value;
        if()
    }
}

export default Signup1