import React from 'react';
import Map from './Map';
import '../style/login.css';
import LoginLogo from '../assets/login.png';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";

const Login = (props) => {
    const {isLoggedIn, setisLoggedIn} = props.auth
    const [ username, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        if (username === "Admin" && password === "pcmc@1234") {
            alert("Login Successfully!!");
            setisLoggedIn(true)
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            navigate('/mapview');
        } else {
            alert('Enter Correct Username and Password!!');
        }
    }

    return (
        <>
            <Map />
            <div className="login">
                <div className="login-logo d-flex justify-content-center align-items-center">
                    <img src={LoginLogo} alt="Not found login log" />
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='mt-3'>Login</h2>
                        <div className="form-group mt-4">
                            <FaUser />
                            <input type="text" placeholder="Type your username" onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group mt-4">
                            <FaLock />
                            <input type="password" placeholder="Type your password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link to="/">Forgot password?</Link>
                        </div>
                        <button className="btn-login mt-3">LOGIN</button>
                        <div className="login-signup mt-4">
                            <Link to="/">Sign Up</Link>
                            <div className="theme mt-4 d-flex justify-content-center">
                                <div className="theme-circle theme-black"></div>
                                <div className="theme-circle theme-blue"></div>
                                <div className="theme-circle theme-red"></div>
                                <div className="theme-circle theme-red-gradient"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;