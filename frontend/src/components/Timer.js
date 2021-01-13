import React from 'react';

import TimerFace from './TimerFace';

// svg images
import TimerImage from './svg/timerImage';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    this.animation = null;
    this.totalSeconds = parseInt(props.settings[props.currentTask]) * 60;
    this.state = {
      secondsLeft: this.totalSeconds
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
        this.animation = document.querySelector('.timerPath').animate(
          [{strokeDasharray: '1168 0'}, {strokeDasharray: '0 1168'}],
          {duration: this.totalSeconds * 1000, iterationStart: 1 - this.state.secondsLeft / this.totalSeconds}
        );

        this.setState(state => {
          return {secondsLeft: state.secondsLeft - 1};
        });
        this.interval = setInterval(() => {
          this.setState(state => {
            return {secondsLeft: state.secondsLeft - 1};
          });
        }, 1000);
      } else {
        if (this.animation) {
          this.animation.pause();
        }
        clearInterval(this.interval);
      }
    } 
    return true;
  }

  componentDidMount() {
    // if this timer was created by "skip" button
    if (!this.props.onPause) {
      this.animation = document.querySelector('.timerPath').animate(
        [{strokeDasharray: '1168 0'}, {strokeDasharray: '0 1168'}],
        {duration: this.totalSeconds * 1000, iterationStart: 1 - this.state.secondsLeft / this.totalSeconds}
      );
    }
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.pause();
    }
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
        <TimerImage 
          color={this.props.settings.taskColors[this.props.currentTask]} 
          seconds={this.state.secondsLeft} total={this.totalSeconds}
        />
        <TimerFace 
          seconds={this.state.secondsLeft} onFinish={this.props.onFinish} 
          currentTask={this.props.currentTask} onPause={this.props.onPause}
          settings={this.props.settings} calculateNextTask={this.props.calculateNextTask}
          workCounter={this.props.workCounter}
        />
      </div>
    );
  }
}

export default Timer;