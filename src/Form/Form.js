import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      salary: "",
      clicked: false,
      array: [],
    };
  }
  changeEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  SubmitForm = (event) => {
    event.preventDefault();
    let temp_obj = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary,
    };

    this.state.array.push(temp_obj);

    this.setState({
      clicked: true,
      name: "",
      age: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name "
            value={this.state.name}
            onChange={this.changeEvent}
          />
          <br></br>
          <label htmlFor="age">age:</label>
          <input
            type="number"
            id="age"
            value={this.state.age}
            onChange={this.changeEvent}
          />
          <br></br>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary "
            value={this.state.salary}
            onChange={this.changeEvent}
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
