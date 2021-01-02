import React from 'react';

import Navbar from './Navbar';
import Main from './Main';

// overriding default browser's css
import '../css/override.css';

export default function App(props) {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
}