import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {

    console.log(this.props.data)
    return (
      <ul>
        <li className="boy">Name 1</li>
        <li className="girl">Name 1</li>
      </ul>
    );
  }
}

export default App;
