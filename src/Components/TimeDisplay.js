import React, { Component } from "react";

export const TimeDisplay = props => {
  if (props.minutes >= 10 && props.seconds >= 10) {
    return (
      <h1>
        {props.minutes}:{props.seconds}
      </h1>
    );
  }
  if (props.minutes >= 10 && props.seconds <= 9) {
    return (
      <h1>
        {props.minutes}:0{props.seconds}
      </h1>
    );
  }
  if (props.minutes <= 9 && props.seconds >= 10) {
    return (
      <h1>
        0{props.minutes}:{props.seconds}
      </h1>
    );
  } else {
    return (
      <h1>
        0{props.minutes}:0{props.seconds}
      </h1>
    );
  }
};
