import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    userEmail: "",
    userPassword: "",
    regulations: false,

    err: {
      userName: false,
      userEmail: false,
      userPassword: false,
      regulations: false
    }
  };

  messages = {
    userName_incorrect: "Your name is too short or consists space",
    userEmail_incorrect: "You have to use @",
    userPassword_incorrect: "Your password is to easy. Use min. 8 signs",
    regulations_incorrect: "You have to accept regulations"
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

    const validation = this.formValidation();
    console.log(validation);
    if (validation.correct) {
      this.setState({
        userName: "",
        userEmail: "",
        userPassword: "",
        regulations: false,

        err: {
          userName: false,
          userEmail: false,
          userPassword: false,
          regulations: false
        }
      });
    } else {
      this.setState({
        err: {
          userName: !validation.userName,
          userEmail: !validation.userEmail,
          userPassword: !validation.userPassword,
          regulations: !validation.regulations
        }
      });
    }
  };

  formValidation = () => {
    // true - ok, false - not ok
    let userName = false;
    let userEmail = false;
    let userPassword = false;
    let regulations = false;
    let correct = false;

    if (
      this.state.userName.length > 2 &&
      this.state.userName.indexOf(" ") === -1
    ) {
      userName = true;
    }
    if (this.state.userEmail.indexOf("@") !== -1) {
      userEmail = true;
    }
    if (this.state.userPassword.length >= 8) {
      userPassword = true;
    }
    if (this.state.regulations) {
      regulations = true;
    }
    if (userName && userEmail && userPassword && regulations) {
      correct = true;
    }
    return {
      userName,
      userEmail,
      userPassword,
      regulations,
      correct
    };
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
          {this.state.err.userName && (
            <span>{this.messages.userName_incorrect}</span>
          )}
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
          {this.state.err.userEmail && (
            <span>{this.messages.userEmail_incorrect}</span>
          )}
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
          {this.state.err.userPassword && (
            <span>{this.messages.userPassword_incorrect}</span>
          )}
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
          {this.state.err.regulations && (
            <span>{this.messages.regulations_incorrect}</span>
          )}
        </label>
        <button>Sign in</button>
      </form>
    );
  }
}

export default App;
