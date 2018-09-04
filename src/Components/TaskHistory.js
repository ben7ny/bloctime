import React, { Component } from 'react';


class TaskHistory extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      NewTaskDescription: "",
      sendAt: "",
      taskID: 0,
    };

    this.tasksRef = this.props.firebase.database().ref('tasks');
  }

  componentDidMount(){
    this.tasksRef.on('child_added', snapshot => {
      const task = snapshot.val();
      const newId = this.state.taskID++;
      task.key = snapshot.key;
      const tasks = this.state.tasks.concat( task ).sort((a, b) => a.taskID < b.taskID)
      this.setState({ tasks: tasks, taskID: newId })
    });



  }



  // componentWillUnmount() {
  //   this.tasksRef.off('child_added');
  // }


  createTask(e){
    e.preventDefault();
    const newTask = this.state.NewTaskDescription;
    const newId = this.state.taskID++;
    console.log(newTask);
    this.tasksRef.push({
      name: newTask,
      sendAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      taskID: newId
    });

  }




 getNewTaskUpdate(e) {
  this.setState({ NewTaskDescription: e.target.value });
 }

 getNewTaskPriorityUpdate(e) {
   console.log('e', e)
   this.setState({ newTaskPriority: parseInt(e.target.value) })
 }



  render() {
    return(
      <div className="myTaskList"> {this.state.tasks.map((task, index) =>
        <ul key={index}>
          <li>{task.name}</li>
        </ul>
      )}

      <div>
        <form className="NewTaskCreated" onSubmit={ (e) =>this.createTask(e)}>
          <label> Enter New Task:
          <input type="text" placeholder="Type Your Task" value={this.state.NewTaskDescription} onChange={ (e) => this.getNewTaskUpdate(e) }/>
          </label>


          <input type="submit" value="Create Task" />

        </form>
       </div>

      </div>
    );
  }
}



export default TaskHistory;
