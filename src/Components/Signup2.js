import React, { Component } from 'react';
import point2 from '../(1)-2.png'
import '../Css/Signup2.css'

class Signup2 extends Component {
    render() {

        return (
                <div className="welcome__item signup signup2">

                    <div className="point">
                        <div>
                            <h1>Sign up</h1>
                        </div>

                        <div className="fpoint">
                            <img src={point2}></img>
                        </div>
                    </div>

                    <form action="#" className="form">

                        <div className="form__item">
                            <p>password</p>
                            <input type="password" className="form__input" required></input>
                        </div>

                        <div className="form__item">
                            <p>Cornfirm password</p>
                            <input type="password" className="form__input" required></input>
                        </div>

                        <div className="form__item">
                            <button type="submit" className="form__btn">Set Up Your Account</button>
                        </div>

                    </form>
                </div>
        );
    }
}

export default Signup2
