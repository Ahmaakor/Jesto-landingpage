import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import logo from '../../Jesto Images/jesto white.png';
import './Auth.css';    

function Auth() {
    const containerRef = useRef(null);

    const registerBtnClick = () => {
        containerRef.current.classList.add("active");
    };

    const loginBtnClick = () => {
        containerRef.current.classList.remove("active");
    };

    return (
        <div className="Auth">
            <div className="container auth" ref={containerRef}>
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="button"><Link to="/signup">Sign Up</Link></button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot Your Password?</a>
                        <button type="button">Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <div className="logo-auth">
                                <img src={logo} alt="Jesto Logo" />
                            </div>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button onClick={loginBtnClick} className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <div className="logo-auth">
                                <img src={logo} alt="Jesto Logo" />
                            </div>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <button onClick={registerBtnClick} className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;

