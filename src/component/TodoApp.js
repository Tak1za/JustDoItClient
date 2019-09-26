import React, { Component } from "react";
import ListTasks from "./ListTasks";

class TodoApp extends Component {
  render() {
    return (
      <>
        <h1>Just Do It...</h1>
        <ListTasks />
      </>
    );
  }
}

export default TodoApp;
