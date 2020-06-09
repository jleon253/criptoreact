import React from 'react';
import logo from '../../logo.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <h1 className="navbar-brand mb-0 h1">
        <img src={logo} className="App-logo" width="30" height="30" loading="lazy" alt="logo" />
        CriptoReact
      </h1>
    </nav>
  );
};

export default Navbar;