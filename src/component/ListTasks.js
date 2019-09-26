import React, { Component } from "react";
import "./ListTask.css";
import DataService from "../service/DataService";

class ListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      message: null
    };
    this.refreshTasks = this.refreshTasks.bind(this);
    this.deleteTaskClicked = this.deleteTaskClicked.bind(this);
    this.updateTaskClicked = this.updateTaskClicked.bind(this);
    this.addTaskClicked = this.addTaskClicked.bind(this);
  }

  componentDidMount() {
    this.refreshTasks();
  }

  refreshTasks() {
    DataService.retrieveAllTasks("Tak1za").then(response => {
      console.log(response);
      this.setState({
        tasks: response.data
      });
    });
  }

  deleteTaskClicked(id) {
    DataService.deleteTask("Tak1za", id).then(response => {
      this.setState({ message: `Delete of course ${id} successful` });
      this.refreshTasks();
    });
  }

  updateTaskClicked(id) {
    this.props.history.push(`/tasks/${id}`);
  }

  addTaskClicked() {
    this.props.history.push(`/tasks/-1`);
  }

  render() {
    return (
      <div className="container">
        <h3>All Tasks</h3>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.updateTaskClicked(task.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTaskClicked(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTaskClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTasks;
