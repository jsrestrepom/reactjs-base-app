import React, { Component } from 'react';

import AuthenticationService from './AuthenticationService';


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
    if (this.state.password.length === 0) {
      this.setState({
        hasLoginFailed: true,
        showSuccessMessage: false,
      });
    } else {
      this.setState({
        hasLoginFailed: false,
        showSuccessMessage: true,
      });
      AuthenticationService.registerSuccesfulLogin(this.state.username);
      this.props.history.push(`/welcome/${this.state.username}`);
    }
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <div className="container">
          { this.state.hasLoginFailed && <ShowInvalidCredentialMessage /> }
          { this.state.showSuccessMessage && <ShowLoginSuccessMessage /> }
          User Name: <input type="text" name="username" value={ this.state.username } onChange={ this.handleChange } />
          Password: <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } />
          <button className="btn btn-success" onClick={ this.loginClicked }>Login</button>
        </div>
      </>
    );
  }
}

function ShowInvalidCredentialMessage() {
  return <div className="alert alert-warning" >Invalid Credentials</div>;
}

function ShowLoginSuccessMessage() {
  return <div>Login succesful</div>;
}

export default LoginComponent;
