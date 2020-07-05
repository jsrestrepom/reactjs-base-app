import axios from 'axios';


const API_LOCATION = 'http://localhost:8080';

class TodoDataService {

  retrieveAllTodos(username) {
    console.log('retrieveAllTodos in action');
    return axios.get(`${API_LOCATION}/users/${username}/todos`);
  }

  retrieveTodo(username, id) {
    console.log('retrieveTodo in action');
    return axios.get(`${API_LOCATION}/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    console.log('deleteTodo in action');
    return axios.delete(`${API_LOCATION}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    console.log('updateTodo in action');
    return axios.put(`${API_LOCATION}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    console.log('createTodo in action');
    return axios.post(`${API_LOCATION}/users/${username}/todos`, todo);
  }

}

export default new TodoDataService();
