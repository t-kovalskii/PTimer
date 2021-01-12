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

    this.state = {
      switchOn: true,
      pomodoros: 4,
      working: 25,
      break: 5,
      long_break: 15
    };

    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.switch = this.switch.bind(this);
    this.readCookies = this.readCookies.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.readCookies();
  }

  close() {
    this.readCookies();
    this.props.close();
  }

  readCookies() {
    for (let cookie of document.cookie.split('; ')) {
      let [name, value] = cookie.split('=');
      this.setState({[name]: value});
    }
  }

  switch() {
    this.setState(state => {
      return {switchOn: state.switchOn === 'true' ? 'false' : 'true'};
    });
  }

  save() {
    const fields = ['switchOn', 'pomodoros', 'working', 'break', 'long_break'];

    // validating input
    for (let field of fields.slice(1)) {
      const fieldValue =  this.state[field] - 0;

      if (this.state[field] === '') {
        alert('Input is not valid. Please enter nonnegative integers');
        return;
      }
      if (fieldValue >= 0 && parseInt(fieldValue) === fieldValue) {
        continue;
      }

      alert('Input is not valid. Please enter nonnegative integers');
      return;
    }

    // saving the cookies for a mounth
    for (let cookie of fields) {
      let setting = `${cookie}=${this.state[cookie]};`;
      let age = `max-age= ${60 * 60 * 24 * 31}`;
      document.cookie = setting + ' ' + age;
    }
    // writing data in fields to settings and re-rendering main section
    this.props.setSettings(true);

    this.close();
  }

  handleChange(event) {
    const currentField = event.target.id.split('numberInput')[1];
    this.setState(() => {
      return {[currentField]: event.target.value};
    });
  }

  render() {
    return (
      <div className={this.props.show ? 'popupBox-displayed' : 'popupBox'}>
        <div className="popupInner">
          <div className="generalSettings">
            <div className="settingsHeader">
              <span id="settingsLabel">Settings</span>
              <button id="closeButton" onClick={this.close}>
                <CloseIcon size={25} />
              </button>
            </div>
            <div className="generalFields">
              <SettingsField 
                leftSlot={<span>Auto-start</span>}
                rightSlot={
                  this.state.switchOn === 'true' ? <SwitcherOn size={30} switch={this.switch} /> : <SwitcherOff size={30} switch={this.switch} />
                }
              />
              <SettingsField 
                leftSlot={<span>Pomodoros before long break</span>}
                rightSlot={
                  <input id="numberInputpomodoros" type="number" min="0" step="1"
                    value={this.state.pomodoros} onChange={this.handleChange}
                  />
                }
              />
            </div>
          </div>
          <div className="timerSettings">
            <span id="timerSettingsLabel">Timer settings</span>
            <div className="timerFields">
              {
                ['working', 'break', 'long_break'].map((caption, key) => {
                  return <SettingsField key={key}
                    leftSlot={caption[0].toUpperCase() + caption.slice(1).split('_').join(' ') + ' (minutes)'}
                    rightSlot={
                      <input id={'numberInput' + caption} min="0" step="1"
                        type="number" onChange={this.handleChange} 
                        value={this.state[caption]}
                      />
                    }
                  />
                })
              }
            </div>
          </div>
          <button id="okButton" onClick={this.save}>Save</button>
        </div>
      </div>
    );
  }
}

export default Popup;