import React from 'react';

import loginImg from '../../assets/loginImg.png';
import './style.css';

export const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    setHasAccount,
    hasAccount,
    handleLogin,
    handleSignup} = props;
     

  return (
    <div className="container">
      <aside className="aside ">
        <h2> Follow the easy steps to make your login</h2>
        <div className="form-description">
          <p>Please make your login</p>
          <input 
          type="text" 
          autoFocus 
          placeholder="Email" 
          autoComplete="off" 
          required 
          value={email} 
          onChange={(e)=>(setEmail(e.target.value))}
          />
          <p className="error-message">{emailError}</p>
          <input 
          type="password" 
          placeholder="Password"
          autoComplete="off" 
          required value={password} onChange={(e)=>(setPassword(e.target.value))}/>
          <p className="error-message">{passwordError}</p>
          <div className="signup-container">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>SignIn</button>
                <p>Dont have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Signup</span></p>
              </>
            ): (
              <>
                <button onClick={handleSignup}>Signup</button>
                <p>Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>SignIn</span></p>
              </>
            )}
        </div>
        </div>  
       
      </aside>
     
      <div className="image">
        <img src={loginImg} alt="img"/>
      </div>
      
    </div>
  )
}



