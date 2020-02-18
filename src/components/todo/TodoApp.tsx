import React, { Component } from "react";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent></LoginComponent>
      </div>
    );
  }
}

class LoginComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "username",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);

    //this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
  }

  handlerChange(event) {
    console.log(this.state);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginClicked() {
    if (
      this.state.username === "username" &&
      this.state.password === "password"
    ) {
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
      {/*   <ShowInvalidCredentials
          hasLoginFailed={this.state.hasLoginFailed}
        ></ShowInvalidCredentials>
        <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage> */}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handlerChange}
        ></input>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlerChange}
        ></input>
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  }

  return null;
}

function ShowLoginSuccessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Sucessfull</div>;
  }

  return null;
}

export default TodoApp;

// krok 06 skończony
