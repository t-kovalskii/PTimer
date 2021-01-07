import React from 'react';

import WorkCircle from './svg/workCircle';

/* Time left label and colored circles at the center 
*  of the timer */
class TimerFace extends React.Component {
  render() {
    return (
      <div className="timerFaceBox">
        <div className="timerFace">
          <span className="timeLabel">
            {/* should be remade when making states */}
            14:36
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