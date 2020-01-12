import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

interface MyProps {
  by: number;
  incrementMethod: Function;
}

interface MyState {
  counter: number;
}

class Counter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ counter: 0 });
  }

  increment(by: number) {
    this.setState((prevState: any) => {
      return { counter: this.state.counter + by };
    });
    console.log(`increment from parent - ${by}`);
  }

  decrement(by: number) {
    this.setState((prevState: any) => {
      return { counter: this.state.counter - by };
    });
    console.log(`decrement from parent - ${by}`);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count"> {this.state.counter}</span>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

class CounterButton extends Component<any, any> {
  public static defaultProps: any;
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
        <span
          className="count"
          style={{ fontSize: "50px", padding: "15px 30px" }}
        >
          {this.state.counter}
        </span>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });
    // console.log("increment");

    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by
    });
    // console.log("increment");

    this.props.decrementMethod(this.props.by);
  }
}

export default Counter;

CounterButton.defaultProps = {
  by: 1
};

// Counter.propTypes={
//   by:PropTypes.number
// }
