import React, { Component } from "react";

export class ClassComp extends Component {
  state = {
    name: "Shailesh",
    change: true,
    count: 0,
  };

  onChange = () => {
    this.setState({
      change: !this.state.change,
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <h1> Class Component </h1>

        <button onClick={this.onChange}>Click-{this.state.count}</button>
        {this.state.change ? <h2>{this.state.name} </h2> : <h2>New User </h2>}
      </>
    );
  }
}
