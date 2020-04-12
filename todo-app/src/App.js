import React, { Component } from 'react';
import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './App.css';
import './bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter></Counter>*/ }
        <TodoApp />
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
