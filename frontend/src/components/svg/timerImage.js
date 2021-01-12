import React from 'react';

// circle timer svg image
class TimerImage extends React.Component {
  constructor(props) {
    super(props);

    this.circleLength = 1168;
  }

  shouldComponentUpdate() {
    this.dash = (this.props.seconds / this.props.total) * this.circleLength;
    this.gap = this.circleLength - this.dash;

    return true;
  }

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="376.73px" height="376.74px" viewBox="0 0 376.73 376.74" 
        style={{enableBackground: 'new 0 0 376.73 376.74'}}
        xmlSpace="preserve" className="timerImage"
      >
        <path className="timerPath"
          style=
          {{
            fill: 'none', stroke: this.props.color, 
            strokeWidth: 5, strokeMiterlimit: 10,
            strokeDasharray: this.circleLength
          }}
          d="M374.23,188.37c0,102.65-83.21,185.87-185.87,185.87S2.5,291.02,2.5,188.37S85.71,2.5,188.36,2.5
          c102.65-0.01,185.86,83.2,185.87,185.85C374.23,188.36,374.23,188.36,374.23,188.37z"
        />
      </svg>
    );
  }
}
// 1183

export default TimerImage;