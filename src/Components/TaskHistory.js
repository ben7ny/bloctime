import React, { Component } from "react";
import TaskButton from "./TaskButton.js";

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
      <div>
        <header className="App-header">
          <h1 className="App-title">Pumadoro</h1>
          <TaskButton tasks={this.state.tasks} />
        </header>
        <h1 className="App-intro">Task History</h1>
        <div className="myTaskList">
          {" "}
          {this.state.tasks
            .map((task, index) => (
              <ul key={index}>
                <li>{task.name}</li>
              </ul>
            ))
            .reverse()}
          <div>
            <form className="NewTaskCreated" onSubmit={e => this.createTask(e)}>
              <label>
                {" "}
                Enter New Task:
                <input
                  type="text"
                  placeholder="Type Your Task"
                  value={this.state.NewTaskDescription}
                  onChange={e => this.getNewTaskUpdate(e)}
                />
              </label>

              <input type="submit" value="Create Task" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskHistory;
