import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  render() {
    return <Card contacts={this.state.contacts} />;
  }

  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch("https://kmote.mx/devtest/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
        console.log(data)
      })
      .catch(console.log);
  }
}

export default App;
