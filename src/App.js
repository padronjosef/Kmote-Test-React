import React, { Component } from "react";
import "./style.css"

import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <Card contacts={this.state.contacts} />
      </div>
    );
  }

  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch("https://kmote.mx/devtest/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.data });
      })
      .catch(console.log);
  }
}

export default App;
