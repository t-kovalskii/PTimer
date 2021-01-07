import React from 'react';

import TimerFace from './TimerFace';

// svg images
import TimerImage from './svg/timerImage';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: null, 
      settings: null, 
      currentTask: null,
    };

    this.initState = this.initState.bind(this);
  }

  componentDidMount() {
    this.initState();
  }

  initState() {

  }

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