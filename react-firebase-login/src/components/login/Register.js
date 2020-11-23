import React from 'react';
import loginImg from '../../assets/loginImg.png';
import './style.css';

export const Register = () => {
  return (
    <div className="container">
      Register
      <aside className="aside">
        <form className="login-form" action="#">
        <h2> Follow the easy steps to signup</h2>
          <div className="form-description">
            <p>Please Signup</p>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Signup</button>
          </div>
        </form>
      </aside>
      <div className="image">
        <img src={loginImg} alt="img"/>
      </div>
      
    </div>
  )
}



