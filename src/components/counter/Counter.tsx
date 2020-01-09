import React, { Component } from "react";
import "./Counter.css";

interface MyProps {}

interface MyState {
  counter: number;
}

class Counter extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log("increment");
  }
}

export default Counter;
