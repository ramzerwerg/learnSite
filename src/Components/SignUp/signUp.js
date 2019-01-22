import React, { Component } from 'react';

import '../../style/signUp.css'

import point1 from '../../style/img/1-(2).png';
import point2 from '../../style/img/(1)-2.png';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        };
    }

    render() {
        // const stepTwo =<div className="welcome__item signup signup2">

        //         <div className="point">
        //             <div>
        //                 <h1>Sign up</h1>
        //             </div>

        //             <div className="fpoint">
        //                 <img src={point2}></img>
        //             </div>
        //         </div>

        //         <form action="#" className="form">

        //             <div className="form__item">
        //                 <p>password</p>
        //                 <input type="password" className="form__input" required></input>
        //             </div>

        //             <div className="form__item">
        //                 <p>Cornfirm password</p>
        //                 <input type="password" className="form__input" required></input>
        //             </div>

        //             <div className="form__item">
        //                 <button type="submit" className="form__btn">Set Up Your Account</button>
        //             </div>

        //         </form>
        //     </div>

        return (
            <section className="welcome">

            <div className="welcome__item text">
              <h1>Great to see you here!</h1>
              <p>Create a Beholder account to search for new faces.</p>
            </div>

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
                        <button type="submit" className="form__btn" onClick={this.handleClick(true)}>Set Up Your Account</button>
                    </div>

                    <p>Already a Beholder member? <a className="form__a" href="#">Log in</a></p>
                </form>
            </div>

          </section>
        );
    }

    handleClick = (value) => {
        this.setState({
          isClick: true
        })
      }
}

export default SignUp;