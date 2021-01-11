import React from 'react';

import WorkCircle from './svg/workCircle';

/* Time left label and colored circles at the center 
*  of the timer */
class TimerFace extends React.Component {
  formatTime(total) {
    // consider remaking
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;

    if ((seconds + '').length === 1) {
      seconds = '0' + seconds;
    }
    if ((minutes + '').length === 1) {
      minutes = '0' + minutes;
    }

    const time = [minutes + '', seconds + ''].join(':');
    const currentTask = this.props.currentTask;
    if (this.props.onPause) {
      document.title = 'PTimer';
    } else {
      document.title = currentTask[0].toUpperCase() + currentTask.slice(1).split('_').join(' ') + ' for ' + time;
    }

    return time;
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.seconds === -1) {
      this.props.onFinish();
    }
    return true;
  }

  render() {
    return (
      <div className="timerFaceBox">
        <div className="timerFace">
          <span className="timeLabel">
            {this.formatTime(this.props.seconds)}
          </span>
          <div className="workCircles">
            {/* temporary */}
            {Array(5).fill(null).map((elem, index) => <WorkCircle key={index} size={20} color={'#29ABE2'} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default TimerFace;