import React from 'react';

import Button from './Button';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        {
          // temporary
          ['Pause', 'Stop', 'Skip'].map((caption, key) => {
            return <Button size={140} caption={caption} key={key} />
          })
        }
      </div>
    );
  }
}

export default Buttons;