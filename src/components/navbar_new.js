import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className="Navbar"
      style={{width: window.innerWidth > 769 && expand ? '6rem' : ''}}
    >
      <div className="navbar-left">English</div>
      <div className="navbar-middle">
        <Link to="/">
          Covid19<span>India</span>
        </Link>
      </div>
      <div
        className="navbar-right"
        style={{
          background: expand ? '#4c75f2' : '',
          color: expand ? 'white' : '',
        }}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand ? 'Close' : 'Menu'}
      </div>
      {expand && (
        <div
          className="expand"
          style={{left: window.innerWidth > 769 && expand ? '6rem' : ''}}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
