import React from 'react';
import SettingsField from './SettingsField';

// svg 
import CloseIcon from './svg/close';
import SwitcherOn from './svg/switcher_on';
import SwitcherOff from './svg/switcher_off';

// css
import '../css/layout/popup.css';
import '../css/style/popup.css'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {switchOn: true};
    this.switch = this.switch.bind(this);
  }

  switch() {
    this.setState(state => {
      return {switchOn: !state.switchOn};
    });
  }

  render() {
    return (
      <div className={this.props.show ? 'popupBox-displayed' : 'popupBox'}>
        <div className="popupInner">
          <div className="generalSettings">
            <div className="settingsHeader">
              <span id="settingsLabel">Settings</span>
              <button id="closeButton" onClick={this.props.close}>
                <CloseIcon size={25} />
              </button>
            </div>
            <div className="generalFields">
              <SettingsField 
                leftSlot={<span>Auto-start</span>}
                rightSlot={
                  this.state.switchOn ? <SwitcherOn size={30} switch={this.switch} /> : <SwitcherOff size={30} switch={this.switch} />
                }
              />
              <SettingsField 
                leftSlot={<span>Pomodoros before long break</span>}
                rightSlot={<input id="numberInput" type="number" />}
              />
            </div>
          </div>
          <div className="timerSettings">
            <span id="timerSettingsLabel">Timer settings</span>
            <div className="timerFields">
              {
                ['working', 'break', 'long_break'].map((caption, key) => {
                  return <SettingsField key={key}
                    leftSlot={caption[0].toUpperCase() + caption.slice(1).split('_').join(' ')}
                    rightSlot={<input id={'numberInput' + caption} type="number" />}
                  />
                })
              }
            </div>
          </div>
          <button id="okButton">Save</button>
        </div>
      </div>
    );
  }
}

export default Popup;