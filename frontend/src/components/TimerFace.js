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
      if ('Notification' in window) {
        const task = this.props.currentTask.split('_').join(' ');
        new Notification(
          task[0].toUpperCase() + task.slice(1) + ' is over',
          {body: this.props.settings.switchOn === 'true' ? 'Next task has started' : 'Start a new task manually'}
        );
      }
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
            {
              (function() {
                const circles = [];
                let currentTask = this.props.currentTask;

                circles.push(
                  <WorkCircle 
                    id={!this.props.onPause ? 'currentCircle' : null} 
                    size={20} color={this.props.settings.taskColors[currentTask]} key={0} 
                  />
                );       
                
                let workCounter = this.props.workCounter;
                Array(4).fill(null).map((_, key) => {
                  if (workCounter === parseInt(this.props.settings.pomodoros)) workCounter = 0;
                  currentTask = this.props.calculateNextTask(
                    currentTask === 'working' ? ++workCounter : workCounter,
                    currentTask
                  );
                  circles.push(
                    <WorkCircle size={20} color={this.props.settings.taskColors[currentTask]} key={key + 1} />
                  );
                  return null;
                })

                return circles;
                
              }).bind(this)()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TimerFace;