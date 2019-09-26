import React, { Component } from "react";
import DataService from "../service/DataService";
import { Formik, Field, Form, ErrorMessage } from "formik";

class TaskDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: "",
      description: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    this.retrieveTask();
  }

  retrieveTask() {
    DataService.retrieveTask("Tak1za", this.state.id).then(response => {
      this.setState({
        title: response.data.title,
        description: response.data.description
      });
    });
  }

  onSubmit(values) {
    if (this.state.id === -1) {
      console.log("Create hit");
      DataService.createTask("Tak1za", values).then(() =>
        this.props.history.push("/tasks")
      );
    } else {
      console.log("Update hit");
      DataService.updateTask("Tak1za", this.state.id, values).then(() =>
        this.props.history.push("/tasks")
      );
    }

    console.log(values);
  }

  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 charachters in the description";
    }

    return errors;
  }

  render() {
    let { title, description, id } = this.state;

    return (
      <div>
        <h3>Task</h3>

        <div className="container">
          <Formik
            initialValues={{ id: id, title: title, description: description }}
            onSubmit={this.onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {
              <Form>
                <fieldset className="form-group">
                  <label>Id</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="id"
                    disabled
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Title</label>
                  <Field className="form-control" type="text" name="title" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-danger"
                />
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            }
          </Formik>
        </div>
      </div>
    );
  }
}

export default TaskDetails;
