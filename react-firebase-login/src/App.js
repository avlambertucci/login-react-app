import React, {useState} from 'react';
import {Login} from './components/login/Login';

function App() {

  const [isLoggingActive, setIsLoggingActive] = useState(true)
  return(
    <div className="App">
      {isLoggingActive && <Login active={isLoggingActive}/>}
      
      
    </div>

  )
}

export default App;
