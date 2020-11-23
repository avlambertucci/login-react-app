/* eslint-disable default-case */
import React, {useState, useEffect} from 'react';
import fire from './fire'
import {Login} from './components/login/Login';
import {Hero} from './components/login/Hero';

function App() {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = ()=>{
    setEmail('');
    setUser('');
  }
  const clearErrors = ()=>{
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = ()=>{
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
        }
      })

  }

  const handleSignup = ()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
      }
    })
  }

  const handleLogout = ()=>{
    fire.auth().signOut()
  }
  const authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs()
        setUser(user);
      }else{
        setUser('')
      }
    })
  }

  useEffect(()=>{
    authListener();
  },[])

  return(
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ): (
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        emailError={emailError}
        passwordError={passwordError}
        setHasAccount={setHasAccount}
        hasAccount={hasAccount}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      
        />
      )}
     
      
    </div>

  )
}

export default App;
