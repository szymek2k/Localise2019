import React, { Component } from "react";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent></LoginComponent>>
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "username",
      password: ""
    };

    this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
    
    this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
  }

  handlerUsernameChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value
    });
  }

  handlerPasswordChange(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handlerUsernameChange}
        ></input>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlerPasswordChange}
        ></input>
        <button>Login</button>
      </div>
    );
  }
}

export default TodoApp;

// krok 03 skończony
