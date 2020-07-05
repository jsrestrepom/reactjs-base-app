import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';


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
