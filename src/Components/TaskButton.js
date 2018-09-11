import React, { Component } from 'react';
import {TimeDisplay} from './TimeDisplay'
class TaskButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      breakVisibility: false,
      timerStarted: false,
      minutes: 25,
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
            this.setState({minutes:25, seconds: 0, breakVisibility: true});
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


  handleBreak(e){
    e.preventDefault();
    if(!this.state.timerStarted){
      this.setState({minutes:5, seconds: 0, timerStarted: true})
      this.timer = setInterval(() => {
        if(this.state.seconds === 0){
          if(this.state.minutes > 0){
            this.setState({minutes: this.state.minutes -1, seconds: 59});
          }else{
            this.setState({timerStarted: false})
            clearInterval(this.timer);
            this.setState({minutes:25, seconds: 0, breakVisibility: false});
            console.log("sond goes here");
          }
        }
        else{
          this.setState({seconds: this.state.seconds - 1});
        }


      }, 1000);

    }

  }





  render() {
    return(
      <div>
        <TimeDisplay  minutes={this.state.minutes} seconds={this.state.seconds}/>
        <button onClick={this.handleTimeStart.bind(this)}>Start</button>
        <button onClick={this.handleTimeRest.bind(this)}>Reset</button>
        <button className={this.state.breakVisibility ? 'shown' : 'hidden'} onClick={this.handleBreak.bind(this)}>Break</button>
      </div>
    );
  }
}


export default TaskButton;
