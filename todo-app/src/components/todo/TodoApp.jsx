import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
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

export default TodoApp;
