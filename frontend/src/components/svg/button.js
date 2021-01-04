import React from 'react';

/* Button svg image */
class ButtonImage extends React.Component {
  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        width={this.props.size + 'px'} height={this.props.size + 'px'} viewBox="0 0 490.5 213.8" 
        style={{enableBackground: 'new 0 0 490.5 213.8'}} xmlSpace="preserve"
      >
        <path className="buttonPath" style={{fill: /* should be set by state */'#E30613'}}
          d="M428.1,213.8H62.4C27.9,213.8,0,185.9,0,151.4v-89C0,27.9,27.9,0,62.4,0h365.7c34.5,0,62.4,27.9,62.4,62.4v89
          C490.5,185.8,462.6,213.8,428.1,213.8z"  
        />
        <text className="buttonCaption" x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          {this.props.caption}
        </text>
      </svg>
    );
  }
}

export default ButtonImage;