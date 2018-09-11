import React, { Component } from 'react';
import {TimeDisplay} from './TimeDisplay'
import dingSfx from './ding-sound-effect.mp3'


class TaskButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      breakVisibility: false,
      timerStarted: false,
      minutes: 25,
      seconds: 0
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = dingSfx;
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
            this.audioElement.play();
            this.setState({minutes:25, seconds: 0, breakVisibility: true});


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
    this.setState({minutes:25, seconds: 0, timerStarted: false})
    clearInterval(this.timer);

  }


  handleBreak(e){
    e.preventDefault();
    const taskNum = this.props.tasks.length;
    console.log(taskNum);
    if(taskNum % 4 === 0){
      if(!this.state.timerStarted){
        this.setState({minutes:30, seconds: 0, timerStarted: true})
        this.timer = setInterval(() => {
          if(this.state.seconds === 0){
            if(this.state.minutes > 0){
              this.setState({minutes: this.state.minutes -1, seconds: 59});
            }else{
              this.setState({timerStarted: false})
              clearInterval(this.timer);
              this.audioElement.play();
              this.setState({minutes:25, seconds: 0, breakVisibility: false});
            }
          }
          else{
            this.setState({seconds: this.state.seconds - 1});
          }


        }, 1000);

      }
    }else {
      if(!this.state.timerStarted){
        this.setState({minutes:5, seconds: 0, timerStarted: true})
        this.timer = setInterval(() => {
          if(this.state.seconds === 0){
            if(this.state.minutes > 0){
              this.setState({minutes: this.state.minutes -1, seconds: 59});
            }else{
              this.setState({timerStarted: false})
              clearInterval(this.timer);
              this.audioElement.play();
              this.setState({minutes:25, seconds: 0, breakVisibility: false});
            }
          }
          else{
            this.setState({seconds: this.state.seconds - 1});
          }


        }, 1000);

      }
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
