import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand logo">
          <a className="navbar-item" href="https://tonara.com/">
            <img src="/assets/images/Tonara_logo.svg" alt="logo" width="112" height="28"/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
