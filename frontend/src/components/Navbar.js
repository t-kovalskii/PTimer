import React from 'react';

import Logo from './svg/logo';
import Crown from './svg/crown';

import '../css/layout/navbar.css';
import '../css/style/navbar.css';

export default function Navbar(props) {
    return (
      <header className="appheader">
        <div className="branding">
          <span className="appname">PTimer</span>
          <Logo size={30} />
        </div>
        <Crown size={35} setSettings={props.setSettings} />
      </header>
    );
}