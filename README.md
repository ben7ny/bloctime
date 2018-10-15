# Pumadoro

Pumadoro is a task management app based on The Pomodoro Technique. each user has 25 minutes to complete a task or reset the time over. After each task, the user has an option to take a 5 minutes break.
The break time would increase to 30 minutes after every four completed tasks.


## Challenge
 Putting complex if statement with logical operators in the Return Method
 that caused some issue with timer not working correctly.  

```
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
```

## solution
 outsourcing the JS conditional statements to a separate component.  
```
export const TimeDisplay = (props) => {
  if(props.minutes >= 10 && props.seconds >= 10 ){
    return <h2>{props.minutes}:{props.seconds}</h2>
  }if (props.minutes >= 10 && props.seconds <= 9 ) {
    return <h2>{props.minutes}:0{props.seconds}</h2>
  }if (props.minutes <= 9 && props.seconds >= 10 ) {
    return <h2>0{props.minutes}:{props.seconds}</h2>
  }else {
    return <h2>0{props.minutes}:0{props.seconds}</h2>
  }

};
```

## Deployment

* [netify](https://www.netlify.com) - used for deployment

## Built With

* [react.js](https://reactjs.org) - Javascript framework used
* [webpack](https://webpack.js.org) - Dependency Management
* [firebase](https://firebase.google.com/) - Realtime Database


## Authors

* **Ben Jason**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
