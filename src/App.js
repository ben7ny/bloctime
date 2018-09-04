import React, { Component } from 'react';
import * as firebase from 'firebase';
import TaskHistory from './Components/TaskHistory.js'
import './App.css';

var config = {
    apiKey: "AIzaSyCXvCpQJ_VjBxPNeNM53wLUnVhDANhjZ-I",
    authDomain: "bloctime-c4a21.firebaseapp.com",
    databaseURL: "https://bloctime-c4a21.firebaseio.com",
    projectId: "bloctime-c4a21",
    storageBucket: "bloctime-c4a21.appspot.com",
    messagingSenderId: "328888711439"
  };
  firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Time</h1>
        </header>
        <h1 className="App-intro">
          Task History
        </h1>
        <TaskHistory firebase={firebase}/>
      </div>
    );
  }
}

export default App;
