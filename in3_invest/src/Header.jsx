import React from 'react';
import logo from "./assets/hero.png"
function Header() {
  return (
    <div className='header'>
      <img src={logo}></img>
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
