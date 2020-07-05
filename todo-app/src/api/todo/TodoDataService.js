import axios from 'axios';


class TodoDataService {

  retrieveAllTodos(username) {
    console.log('retrieveAllTodos in action');
    return axios.get(`http://localhost:8080/users/${username}/todos`);
  }

  retrieveTodo(username, id) {
    console.log('retrieveTodo in action');
    return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    console.log('deleteTodo in action');
    return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    console.log('updateTodo in action');
    return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    console.log('createTodo in action');
    return axios.post(`http://localhost:8080/users/${username}/todos`, todo);
  }

}

export default new TodoDataService();
