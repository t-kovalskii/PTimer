import React from 'react';

import TimerFace from './TimerFace';

// svg images
import TimerImage from './svg/timerImage';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    this.state = {
      secondsLeft: parseInt(props.settings[props.currentTask]) * 60 
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should');
    if (this.props.onPause !== nextProps.onPause) {
      if (!nextProps.onPause) {
        this.interval = setInterval(() => {
          this.setState(state => {
            return {secondsLeft: state.secondsLeft - 1};
          });
        }, 1000);
      } else {
        clearInterval(this.interval);
      }
    } 
    return true;
  }

  render() {
    return (
      <div className="timer">
        <TimerImage color={this.props.settings.taskColors[this.props.currentTask]} />
        <TimerFace seconds={this.state.secondsLeft} />
      </div>
    );
  }
}

export default Timer;