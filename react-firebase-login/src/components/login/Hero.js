import React from 'react';


export const Hero = ({handleLogout})=>{
  return(
    <nav className="header">
      <h2>HOME</h2>
      <span onClick={handleLogout}>Logout</span>
    </nav>
  )
}
