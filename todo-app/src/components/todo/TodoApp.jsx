import React, { Component } from 'react';


class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'in25seconds',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    this.setState({
      hasLoginFailed: true,
      showSuccessMessage: true,
    });
  }

  render() {
    return (
      <>
        { this.state.hasLoginFailed && <ShowInvalidCredentialMessage /> }
        { this.state.showSuccessMessage && <ShowLoginSuccessMessage /> }
        User Name: <input type="text" name="username" value={ this.state.username } onChange={ this.handleChange } />
        Password: <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } />
        <button onClick={ this.loginClicked }>Login</button>
      </>
    );
  }

}

function ShowInvalidCredentialMessage() {
  return <div>Invalid Credentials</div>;
}

function ShowLoginSuccessMessage() {
  return <div>Login succesful</div>;
}

export default TodoApp;
