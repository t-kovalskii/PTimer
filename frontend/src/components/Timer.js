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

    // starting timer at once if auto start is set
    this.shouldComponentUpdate(this.props);
  }

  shouldComponentUpdate(nextProps) {
    /* When continue/pause button is clicked */
    if (this.props.onPause !== nextProps.onPause || this.props.timerKey !== window.timerKey) {

      // saving the timer's key to differentiate it from potential new timer
      window.timerKey = this.props.timerKey;

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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
        <TimerImage color={this.props.settings.taskColors[this.props.currentTask]} />
        <TimerFace 
          seconds={this.state.secondsLeft} onFinish={this.props.onFinish} 
          currentTask={this.props.currentTask} onPause={this.props.onPause}
        />
      </div>
    );
  }
}

export default Timer;