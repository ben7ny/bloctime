import React, { Component } from 'react';

class TaskButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      taskNumber:0,
      timerStarted: false,
      timerStoped: true,
      timeBreak: 5,
      minutes: 25,
      seconds: 60
    };
  }


  handleTimeStart(e){
    e.preventDefault();
    if(this.state.timerStoped){
      setInterval(() => {
        this.setState({timerStarted: true, timerStoped:false })
        if(this.state.timerStarted){
          this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
        }

      }, 1000);

    }

  }




  render() {
    return(
      <div>
        <h2>{this.state.minutes + ":" + this.state.seconds}</h2>
        <button onClick={this.handleTimeStart.bind(this)}>Start</button>
        <button>Reset</button>
        <button>Break</button>
      </div>
    );
  }
}


export default TaskButton;
