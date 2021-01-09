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
        break: '009245',
        long_break: '29ABE2'
      },
    };
    this.state = {
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
      let [name, value] = cookie.split('=');
      settings[name] = value;
    }
    this.settings = Object.assign(this.settings, settings);
  }

  onTimerFinish() {
    if (this.currentTask === 'working') {
      this.workCounter ++;
    }
    this.setCurrentTask(
      this.calculateNextTask()
    );
    if (this.workCounter === this.settings.pomodoros) {
      this.workCounter = 0;
    }
  }

  calculateNextTask() {
    if (this.workCounter === this.settings.pomodoros) {
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
        this.setCurrentTask(this.state.currentTask);
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
            settings={this.settings} onFinish={this.onTimerFinish}
            currentTask={this.state.currentTask} onPause={this.state.onPause}
          />
        </section>
        <section className="buttonssection">
          <Buttons 
            onClick={this.handleClick} leftButtonCaption={this.state.onPause ? 'Continue' : 'Pause'}
            rightButtonColor={this.settings.taskColors[this.calculateNextTask()]}
          />
        </section>
      </main>
    );
  }
}

export default Main;