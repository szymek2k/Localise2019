import React from "react";
//import * as logo from "./logo.svg";
import "./App.css";
import { ProjectBar } from "../projectBar/ProjectBar";

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

  async componentDidMount() {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };

    const res = await fetch("http://localhost:8080/api/v1/translations");
    const text = await res.text();
    alert(text);

    // fetch("http://localhost:8080/api/v1/translations")
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

        <ProjectBar projectName="'Localise'"></ProjectBar>
      </div>
    );
  }
}

export default App;
