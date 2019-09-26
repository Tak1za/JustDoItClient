import React, { Component } from "react";
import ListTasks from "./ListTasks";
import TaskDetails from "./TaskDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Just Do It...</h1>
        <Switch>
          <Route path="/" exact component={ListTasks} />
          <Route path="/tasks" exact component={ListTasks} />
          <Route path="/tasks/:id" component={TaskDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default TodoApp;
