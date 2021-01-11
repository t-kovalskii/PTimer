import React from 'react';

// components 
import Timer from './Timer';
import Buttons from './Buttons';

// css 
import '../css/layout/main.css';
import '../css/style/main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.workCounter = 0;
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
    this.state = {
      // key for making timer rerender itself
      timerKey: Math.random(),
      currentTask: 'working',
      onPause: true
    };

    this.setSettings = this.setSettings.bind(this);
    this.onTimerFinish = this.onTimerFinish.bind(this);
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.calculateNextTask = this.calculateNextTask.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // reading cookies beforehand
    this.setSettings();
  }

  shouldComponentUpdate() {
    this.setSettings();
    return true;
  }

  setSettings() {
    let settings = {};
    for (let cookie of document.cookie.split('; ')) {
      if (!cookie) continue;
      let [name, value] = cookie.split('=');
      settings[name] = value;
    }
    this.settings = Object.assign(this.settings, settings);
  }

  onTimerFinish() {
    if (this.state.currentTask === 'working') {
      this.workCounter ++;
    }
    // re-rendering the timer
    this.setState({
      onPause: !(this.settings.switchOn === 'true'),
      currentTask: this.calculateNextTask(this.workCounter),
      timerKey: Math.random()
    });
    if (this.workCounter === parseInt(this.settings.pomodoros)) {
      this.workCounter = 0;
    }
  }

  calculateNextTask(workCounter) {
    if (workCounter === parseInt(this.settings.pomodoros)) {
      return 'long_break';
    } else {
      return this.state.currentTask === 'working' ? 'break' : 'working';
    }
  }

  setCurrentTask(task) {
    this.setState({currentTask: task});
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'pause':
        this.setState(state => {
          return {onPause: !state.onPause};
        });
        break;
      case 'stop':
        // causing timer to re-render
        this.setState({
          timerKey: Math.random(),
          onPause: true
        });
        break;
      case 'skip':
        // calling timer finish event handler
        this.onTimerFinish();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <main className="maincontent">
        <span className="timerstate">
          {this.state.currentTask[0].toUpperCase() + this.state.currentTask.slice(1).split('_').join(' ')}
        </span>
        <section className="timersection">
          <Timer 
            key={this.state.timerKey} timerKey={this.state.timerKey}
            settings={this.settings} onFinish={this.onTimerFinish}
            currentTask={this.state.currentTask} onPause={this.state.onPause}
          />
        </section>
        <section className="buttonssection">
          <Buttons 
            onClick={this.handleClick} leftButtonCaption={this.state.onPause ? 'Continue' : 'Pause'}
            rightButtonTask=
            {
              (function() {
                let workCounter = this.workCounter;
                return this.calculateNextTask(
                  this.state.currentTask === 'working' ? ++ workCounter : workCounter
                );
              }).bind(this)()
            }
          />
        </section>
      </main>
    );
  }
}

export default Main;