import React from "react";

interface State {
  message: string;
}

interface Props {
}

class Message extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "Welcome visitor"
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
