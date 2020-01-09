import React from "react";
import "./App.css";
import Counter from './components/counter/Counter'


export class App extends React.Component {
  
  render() {
  
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}
