import React, { Component } from "react";
import TaskButton from "./TaskButton.js";
import FullLogo from ".././images/Pumadoro_LogoFull.svg";
import SmallLogo from ".././images/Pumadoro_LogoType.svg";

class TaskHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      NewTaskDescription: ""
    };

    this.tasksRef = this.props.firebase.database().ref("tasks");
  }

  componentDidMount() {
    this.tasksRef.on("child_added", snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key;
      const tasks = this.state.tasks.concat(task);
      this.setState({ tasks: tasks });
    });
  }

  createTask(e) {
    e.preventDefault();
    let newTask = this.state.NewTaskDescription;
    if (newTask === "") {
      return;
    } else {
      this.tasksRef.push({
        name: newTask
      });
      this.setState({ NewTaskDescription: "" });
    }
  }

  getNewTaskUpdate(e) {
    this.setState({ NewTaskDescription: e.target.value });
  }

  render() {
    return (
      <div className="headNbody">
        <header className="App-header">
          <img className="smallLogo" alt="logo" src={SmallLogo} />
          <img className="fullLogo" alt="logo" src={FullLogo} />
          <TaskButton tasks={this.state.tasks} />
        </header>
        <div className="devider" />
        <div className="main">
          <form className="NewTaskCreated" onSubmit={e => this.createTask(e)}>
            <label>
              {" "}
              <p className="taskBoxTitile">Enter New Task:</p>
              <input
                type="text"
                placeholder="Type Your Task"
                value={this.state.NewTaskDescription}
                onChange={e => this.getNewTaskUpdate(e)}
                style={{ borderRadius: "0" }}
              />
            </label>

            <input
              className="addBtnSmall"
              type="submit"
              value="Add Task"
              style={{
                marginTop: "4px",
                width: "70px",
                height: "36px",
                marginLeft: "4px",
                backgroundColor: "#0095d5",
                color: "white",
                fontSize: "0.8rem"
              }}
            />
          </form>
        </div>
        <div className="taskHisotry">
          <h2 className="App-intro">Task History</h2>
          <div className="myTaskList">
            {" "}
            {this.state.tasks
              .map((task, index) => (
                <ul key={index}>
                  <li>{task.name}</li>
                </ul>
              ))
              .reverse()}
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskHistory;
