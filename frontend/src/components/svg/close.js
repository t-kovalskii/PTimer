import React from 'react';

class CloseIcon extends React.Component {
  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        width={this.props.size + 'px'} height={this.props.size + 'px'} viewBox="0 0 60.97 60.84" 
        style={{enableBackground: 'new 0 0 60.97 60.84'}} xmlSpace="preserve"
      >
        <path style={{fill: '#231F20'}}
          d="M59.6,52.86l-22.5-22.5L59.47,7.98c1.83-1.83,1.83-4.79,0-6.61c-1.83-1.83-4.78-1.83-6.61,0L30.48,23.75
          L8.1,1.37c-1.83-1.83-4.78-1.83-6.61,0s-1.83,4.79,0,6.61l22.38,22.38l-22.5,22.5c-1.83,1.83-1.83,4.78,0,6.61
          c0.91,0.91,2.11,1.37,3.31,1.37s2.39-0.46,3.31-1.37l22.5-22.5l22.5,22.5c0.91,0.91,2.11,1.37,3.31,1.37s2.39-0.46,3.31-1.37
          C61.42,57.65,61.42,54.69,59.6,52.86z"
        />
      </svg>
    );
  }
}

export default CloseIcon;