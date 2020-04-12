import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="navbar-left">English</div>
      <div className="navbar-middle">
        <Link to="/">
          Covid19<span>India</span>
        </Link>
      </div>
      <div className="navbar-right">Menu</div>
    </div>
  );
}

export default Navbar;
