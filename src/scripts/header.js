import React from 'react';
import '../styles/header.css';
import Logo from '../images/logo1.png';
import MainBG from '../images/main-bg.jpg';


const Header = () => {
  return (
    <div className="header">
      <img src={MainBG} className="mainbg-logo"/>
      <div className="header-content">
        <img src={Logo} className="gear-logo"/>
        <h1 className="header-title-main">Tech-Gear</h1>
        <div className="header-title">
          <h1 className="header-title-1">We are made</h1> <h1 className="header-title-2">of</h1><h1 className="header-title-3">ideas</h1><h1 className="header-title-4">See for yourself</h1></div>
        </div>
    </div>
  )
}

export default Header;
