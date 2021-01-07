import React from 'react';

// importing popup
import Popup from '../Popup';

/* This class manipulates the crown button on the 
*  top right corner of the page */
class Crown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      showPopup: false
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.switchHover = this.switchHover.bind(this);
  }

  switchHover() {
    this.setState(state => {
      return {hovered: !state.hovered};
    });
  }

  togglePopup() {
    this.setState(state => {
      return {showPopup: !state.showPopup};
    });
  }

  render() {
    return (
      <div  className="crown">
        <button onClick={this.togglePopup} className="crownButton"
          onMouseEnter={this.switchHover} onMouseLeave={this.switchHover}
        >
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
            width={this.props.size + 'px'} height={this.props.size + 'px'} viewBox="0 0 18 18" 
            style={{enableBackground: 'new 0 0 18 18'}} 
            xmlSpace="preserve" className="crown_image"
          >
            <path style={{fill: 'none'}} d="M0,0h18v18H0V0z"/>
            <path className={'crown_path' + (this.state.hovered ? '-hovered' : '')}
              d="M14.35,9.71C14.39,9.48,14.4,9.25,14.4,9c0-0.24-0.02-0.48-0.05-0.7l1.52-1.18c0.14-0.11,0.17-0.31,0.09-0.46
              l-1.44-2.49C14.43,4,14.24,3.95,14.08,4l-1.79,0.72c-0.38-0.28-0.77-0.52-1.22-0.7L10.8,2.11c-0.03-0.18-0.18-0.31-0.36-0.31H7.56
              c-0.18,0-0.32,0.13-0.35,0.31l-0.27,1.9C6.5,4.19,6.09,4.44,5.72,4.71L3.93,4C3.76,3.94,3.58,4,3.49,4.16L2.06,6.65
              C1.96,6.81,2,7.01,2.14,7.11L3.67,8.3C3.63,8.52,3.6,8.77,3.6,9s0.02,0.48,0.05,0.7l-1.52,1.19C2,11,1.96,11.2,2.04,11.35l1.44,2.49
              C3.57,14,3.76,14.06,3.92,14l1.79-0.72c0.38,0.28,0.77,0.53,1.21,0.7l0.27,1.9c0.04,0.18,0.18,0.31,0.36,0.31h2.88
              c0.18,0,0.33-0.13,0.35-0.31l0.27-1.91c0.44-0.18,0.85-0.42,1.22-0.71l1.8,0.74c0.16,0.06,0.35,0,0.44-0.16l1.44-2.49
              c0.09-0.17,0.05-0.35-0.09-0.46L14.35,9.71z M9,11.7c-1.48,0-2.7-1.22-2.7-2.7S7.51,6.3,9,6.3s2.7,1.22,2.7,2.7S10.48,11.7,9,11.7z"
            />
          </svg>
        </button>
        <Popup show={this.state.showPopup} close={this.togglePopup} />
      </div>
    );   
  }
}

export default Crown;