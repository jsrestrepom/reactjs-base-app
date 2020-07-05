import React, { Component } from 'react';

import AuthenticationService from './AuthenticationService';
import TodoDataService from '../../api/todo/TodoDataService';


class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username)
      .then(response => {
        console.log(response);
        this.setState({
          todos: response.data
        });
      });
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

export default ListTodosComponent;
