import React from 'react';

// svg images
import ButtonImage from './svg/button';

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <ButtonImage size={this.props.size} caption={this.props.caption} />
      </div>
    );
  }
}

export default Button;