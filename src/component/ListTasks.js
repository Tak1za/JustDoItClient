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
    this.refreshCourses = this.refreshCourses.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    DataService.retrieveAllTasks("Tak1za").then(response => {
      console.log(response);
      this.setState({
        tasks: response.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3>All Tasks</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTasks;
