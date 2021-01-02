import React from 'react';

import TimerFace from './TimerFace';

// svg images
import TimerImage from './svg/timerImage';

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        <TimerImage />
        <TimerFace />
      </div>
    );
  }
}

export default Timer;