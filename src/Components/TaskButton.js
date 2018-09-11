import React, { Component } from 'react';
import {TimeDisplay} from './TimeDisplay'
class TaskButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      taskNumber:0,
      timerStarted: false,
      timerStoped: true,
      timeBreak: 5,
      minutes: 2,
      seconds: 0
    };
  }


  handleTimeStart(e){
    e.preventDefault();
    if(!this.state.timerStarted){
      this.setState({timerStarted: true})
      this.timer = setInterval(() => {
        if(this.state.seconds === 0){
          if(this.state.minutes > 0){
            this.setState({minutes: this.state.minutes -1, seconds: 59});
          }else{
            this.setState({timerStarted: false})
            clearInterval(this.timer);
            this.setState({minutes:2, seconds: 0});
            console.log("sond goes here");
          }
        }
        else{
          this.setState({seconds: this.state.seconds - 1});
        }


      }, 1000);

    }

  }


  handleTimeRest(e){
    e.preventDefault();
    this.setState({minutes:2, seconds: 0, timerStarted: false})
    clearInterval(this.timer);

  }







  render() {
    return(
      <div>
        <TimeDisplay  minutes={this.state.minutes} seconds={this.state.seconds}/>
        <button onClick={this.handleTimeStart.bind(this)}>Start</button>
        <button onClick={this.handleTimeRest.bind(this)}>Reset</button>
        <button>Break</button>
      </div>
    );
  }
}


export default TaskButton;
