import React, { Component } from 'react';

class TaskButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      timerStarted: false,
      timerStoped: true,
      minutes: 25,
      seconds: 60
    };
  }







  render() {
    return(
      <div>
        <h2>{this.state.minutes + ":" + this.state.seconds}</h2>
        <button>start</button>
      </div>
    );
  }
}


export default TaskButton;
