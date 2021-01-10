import React from 'react';

// svg images
import ButtonImage from './svg/button';

class Button extends React.Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        <ButtonImage 
          className={this.props.nextTask ? this.props.id + '-' + this.props.nextTask : null}
          id={this.props.id} 
          size={this.props.size} 
          caption={this.props.caption}
        />
      </button>
    );
  }
}

export default Button;