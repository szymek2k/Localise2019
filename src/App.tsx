import React from "react";
//import * as logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import { Hello } from "./components/Hello";
import FunctionClick from "./components/FunctionClick";

interface Props {
  name?: string;
}

interface State {
  data: { [name: string]: string }[];
  isLoading: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    // this.ListeningStateChangedEvent({ isLoading: true });
    // fetch("http://localhost:8080/sample")
    //   .then(response => response.json())
    //   .then(data => this.setState({ isLoading: false, data }));
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return <p> Loading</p>;
    }

    return (
      <div className="App">
        {data.map(item => {
          return <div>{item.name}</div>;
        })}
        <Greet name="Bruce">
          <p>This is children props</p>
        </Greet>
        <Greet name="Diana" />
        <Greet name="Clark">
          <button>Action</button>
        </Greet>
        <Welcome name="Bruce" />
        <Welcome name="Diana" />
        <Welcome name="Clark" />
        <Message></Message>
        <FunctionClick></FunctionClick>
        <Hello compiler="TypeScript" framework="React" />
      </div>
    );
  }
}

export default App;
