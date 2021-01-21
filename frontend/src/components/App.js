import React from 'react';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

// overriding default browser's css
import '../css/override.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {mainState: Math.random()};
    this.settings = {
      taskColors: {
        working: '#E30613',
        break: '#009245',
        long_break: '#29ABE2'
      },
      break: 5,
      long_break: 15,
      pomodoros: 4,
      switchOn: false,
      working: 25
    };
  }

  componentDidMount() {
    // if notification api is supported
    if ('Notification' in window) {
      Notification.requestPermission().then((res) => {
        if (res === 'denied') {
          alert('Notifications are turned off, you will not recieve any alerts when timer is done');
        }
      });
    }
  }

  setSettings(update) {
    let settings = {};
    for (let cookie of document.cookie.split('; ')) {
      if (!cookie) continue;
      let [name, value] = cookie.split('=');
      settings[name] = value;
    }
    this.settings = Object.assign(this.settings, settings);
    if (update) this.setState({mainState: Math.random()});
  }

  render() {
    return (
      <div id="appBlock">
        <Navbar setSettings={this.setSettings.bind(this)} />
        <Main key={this.state.mainState} settings={this.settings} setSettings={this.setSettings.bind(this)} />
        <Footer />
      </div>
    );
  }
}