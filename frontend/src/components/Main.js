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
    this.state = {
      // key for making timer rerender itself
      timerKey: Math.random(),
      currentTask: 'working',
      onPause: true
    };

    this.onTimerFinish = this.onTimerFinish.bind(this);
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.calculateNextTask = this.calculateNextTask.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // reading cookies beforehand
    this.props.setSettings();
  }

  onTimerFinish() {
    if (this.state.currentTask === 'working') {
      this.workCounter ++;
    }
    // re-rendering the timer
    this.setState({
      onPause: !(this.props.settings.switchOn === 'true'),
      currentTask: this.calculateNextTask(this.workCounter, this.state.currentTask),
      timerKey: Math.random()
    });
    if (this.workCounter === parseInt(this.props.settings.pomodoros)) {
      this.workCounter = 0;
    }
  }

  calculateNextTask(workCounter, currentTask) {
    if (workCounter === parseInt(this.props.settings.pomodoros)) {
      return 'long_break';
    } else {
      return currentTask === 'working' ? 'break' : 'working';
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
            settings={this.props.settings} onFinish={this.onTimerFinish}
            currentTask={this.state.currentTask} onPause={this.state.onPause}
            calculateNextTask={this.calculateNextTask} workCounter={this.workCounter}
          />
        </section>
        <section className="buttonssection">
          <Buttons 
            onClick={this.handleClick} leftButtonCaption={this.state.onPause ? 'Start' : 'Pause'}
            rightButtonTask=
            {
              (function() {
                let workCounter = this.workCounter;
                return this.calculateNextTask(
                  this.state.currentTask === 'working' ? ++ workCounter : workCounter,
                  this.state.currentTask
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