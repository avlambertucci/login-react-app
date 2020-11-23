import React from 'react';
import loginImg from '../../assets/loginImg.png';
import './style.css';

export const Login = () => {
  return (
    <div className="container">
      <aside className="aside">
        <form className="login-form" autocomplete="off">
          <h2> Follow the easy steps to make your login</h2>
          <div className="form-description">
            <p>Please make your login</p>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Enter</button>
          </div>
        </form>
      </aside>
      <div className="image">
        <img src={loginImg} alt="img"/>
      </div>
      
    </div>
  )
}



