import React, { Component } from 'react';


class TaskHistory extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      NewTaskDescription: ""
    };

    this.tasksRef = this.props.firebase.database().ref('tasks');
  }

  componentDidMount(){
    this.tasksRef.on('child_added', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key;
      const tasks = this.state.tasks.concat( task );
      this.setState({ tasks: tasks })
    });



  }



  // componentWillUnmount() {
  //   this.tasksRef.off('child_added');
  // }


  createTask(e){
    e.preventDefault();
    const newTask = this.state.NewTaskDescription;
    this.tasksRef.push({
      name: newTask
    });

  }




 getNewTaskUpdate(e) {
  this.setState({ NewTaskDescription: e.target.value});
 }





  render() {

    return(
      <div className="myTaskList"> {this.state.tasks.map((task, index) =>

        <ul key={index}>
          <li>{task.name}</li>
        </ul>
      ).reverse()}

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
