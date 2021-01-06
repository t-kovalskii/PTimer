import React from 'react';

class SwitcherOn extends React.Component {
  render() {
    return (
      <button className="switchButton" onClick={this.props.switch}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width={this.props.size + 'px'} height={this.props.size + 'px'} viewBox="0 0 100.36 53.18" 
          style={{enableBackground: 'new 0 0 100.36 53.18'}}
          xmlSpace="preserve"
        >
          <g>
            <path style={{fill:'none',stroke:'#000000',strokeWidth:4,strokeLinecap:'round',strokeLinejoin:'round'}}
              d="M73.41,2H26.59C13.01,2,2,13.01,2,26.59l0,0c0,13.58,11.01,24.59,24.59,24.59h46.83
              C86.99,51.17,98,40.16,98,26.59l0,0C98,13.01,86.99,2,73.41,2z"  
            />
            <path style={{fill:'#009245',stroke:'#000000',strokeWidth:4,strokeLinecap:'round',strokeLinejoin:'round'}}
              d="M73.77,2L73.77,2C60.19,2,49.18,13.01,49.18,26.59l0,0c0,13.58,11.01,24.59,24.59,24.59l0,0
              c13.58,0,24.59-11.01,24.59-24.59l0,0C98.36,13.01,87.35,2,73.77,2z"
            />
          </g>
        </svg>
      </button>
    );
  }
}

export default SwitcherOn;