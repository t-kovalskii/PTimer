import React from 'react';

import Button from './Button';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        {
          ['Pause', 'Stop', 'Skip'].map((caption, key) => {
            let buttonCaption = caption; 
            if (key === 0) buttonCaption = this.props.leftButtonCaption;

            return <Button 
              id={caption.toLowerCase()} size={140} caption={buttonCaption} key={key} 
              onClick={this.props.onClick}
              nextTask={key === 2 ? this.props.rightButtonTask : null}
            />  
          })
        }
      </div>
    );
  }
}

export default Buttons;