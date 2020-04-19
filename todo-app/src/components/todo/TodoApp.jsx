import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from './AuthenticatednRoute';


class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={ LoginComponent } />
            <Route path="/login" component={ LoginComponent } />
            <AuthenticatedRoute path="/logout" component={ LogoutComponent } />
            <AuthenticatedRoute path="/welcome/:name" component={ WelcomeComponent } />
            <AuthenticatedRoute path="/todos" component={ ListTodosComponent } />
            <Route component={ ErrorComponent } />
          </Switch>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">Build it by @jsrestrepomoncada</span>
      </footer>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome { this.props.match.params.name }. Yu can manage your todos <Link to="/todos">here</Link>.
        </div>
      </>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          description: 'Brush my teets',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 4,
          description: 'Learn React',
          done: true,
          targetDate: new Date(),
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              { this.state.todos.map(todo => {
                return (
                  <tr key={ todo.id }>
                    <td>{ todo.description }</td>
                    <td>{ todo.done.toString() }</td>
                    <td>{ todo.targetDate.toString() }</td>
                  </tr>
                );
              }) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Ocurred. I don't know what to do! Contact support at once.</div>
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className="container">
          Thank You For Using Our Application.
        </div>
      </>
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

export default TodoApp;
