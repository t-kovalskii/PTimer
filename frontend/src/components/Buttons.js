import React from 'react';

import Button from './Button';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        {
          ['Pause', 'Stop', 'Skip'].map((caption, key) => {
            let color = '#E30613';
            let buttonCaption = caption; 

            if (key === 0) buttonCaption = this.props.leftButtonCaption;
            if (key === 2) color = this.props.rightButtonColor;

            return <Button 
              id={caption.toLowerCase()} size={140} caption={buttonCaption} key={key} 
              onClick={this.props.onClick} color={color}
            />  
          })
        }
      </div>
    );
  }
}

export default Buttons;