import React from 'react';

/* Svg code of the colored circle at the
*  bottom of the timer face */
class WorkCircle extends React.Component {
  render() {
    return (
      <span className="workCircleBox">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
          x="0px" y="0px" width={this.props.size + 'px'} height={this.props.size + 'px'} 
          viewBox="0 0 322.63 322.63" style={{enableBackground: 'new 0 0 322.63 322.63'}}
          xmlSpace="preserve" className="workCircleImage"
        >
          <circle className="workCirclePath" style={{fill: /* remake when making states */ this.props.color}}
            cx="161.31" cy="161.31" r="161.31"
          />
        </svg>
      </span>
    );
  }
}

export default WorkCircle;