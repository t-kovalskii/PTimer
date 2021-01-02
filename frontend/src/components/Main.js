import React from 'react';

// components 
import Timer from './Timer';
import Buttons from './Buttons';

// css 
import '../css/layout/main.css';
import '../css/style/main.css';

class Main extends React.Component {
  render() {
    return (
      <main className="maincontent">
        <span className="timerstate">
          {/* should be dealt with when implementing states */}
          Working
        </span>
        <section className="timersection">
          <Timer />
        </section>
        <section className="buttonssection">
          <Buttons />
        </section>
      </main>
    );
  }
}

export default Main;