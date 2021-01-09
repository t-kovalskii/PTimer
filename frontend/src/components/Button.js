import React from 'react';

// svg images
import ButtonImage from './svg/button';

class Button extends React.Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        <ButtonImage 
          id={this.props.id} size={this.props.size} 
          caption={this.props.caption} color={this.props.color} 
        />
      </button>
    );
  }
}

export default Button;