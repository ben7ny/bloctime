import React, { Component } from 'react';

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
