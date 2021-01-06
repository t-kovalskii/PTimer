import React from 'react';

class SettingsField extends React.Component {
  render() {
    return (
      <div className="field">
        <div className="leftslot">
          {this.props.leftSlot}
        </div>
        <div className="rightSlot">
          {this.props.rightSlot}
        </div>
      </div>
    );
  }
}

export default SettingsField;