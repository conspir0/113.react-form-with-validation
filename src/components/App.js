import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    userEmail: "",
    userPassword: "",
    regulations: false
  };

  handleChange = e => {
    const value = e.target.value;
    const type = e.target.type;
    const property = e.target.name;
    const checked = e.target.checked;
    if (type === "checkbox") {
      this.setState({
        [property]: checked
      });
    } else {
      this.setState({
        [property]: value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("ok");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="userName">
          Your name:{" "}
          <input
            type="text"
            id="userName"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="userEmail">
          Your email:
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="userPassword">
          Your password:
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={this.state.userPassword}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="regulations">
          <input
            type="checkbox"
            id="regulations"
            name="regulations"
            checked={this.state.regulations}
            onChange={this.handleChange}
          />
          I have read the regulations
        </label>
        <button>Sign in</button>
      </form>
    );
  }
}

export default App;
