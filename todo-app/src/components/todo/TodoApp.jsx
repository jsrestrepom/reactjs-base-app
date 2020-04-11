import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Switch>
            <Route path="/" exact component={ LoginComponent } />
            <Route path="/login" component={ LoginComponent } />
            <Route path="/welcome/:name" component={ WelcomeComponent } />
            <Route path="/todos" component={ ListTodosComponent } />
            <Route component={ ErrorComponent } />
          </Switch>
        </Router>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome { this.props.match.params.name }. Yu can manage your todos <Link to="/todos">here</Link>.
      </div>
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
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            { this.state.todos.map(todo => {
              return (
                <tr key={ todo.id }>
                  <td>{ todo.id }</td>
                  <td>{ todo.description }</td>
                  <td>{ todo.done.toString() }</td>
                  <td>{ todo.targetDate.toString() }</td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Ocurred. I don't know what to do! Contact support at once.</div>
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
    this.props.history.push(`/welcome/${this.state.username}`);
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
