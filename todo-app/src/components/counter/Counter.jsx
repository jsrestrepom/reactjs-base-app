import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


class Counter extends Component {
  constructor() {
    super();

    this.state = { // Define the initial state in a constructor
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="App">
        <CounterButton incrementMethod={ this.increment } decrementMethod={ this.decrement }></CounterButton>
        <CounterButton by={ 5 } incrementMethod={ this.increment } decrementMethod={ this.decrement }></CounterButton>
        <CounterButton by={ 10 } incrementMethod={ this.increment } decrementMethod={ this.decrement }></CounterButton>
        <CounterButton by="40" incrementMethod="this.increment" decrementMethod="this.decrement"></CounterButton>
        <span className="count">{ this.state.counter }</span>
        <div>
          <button className="reset" onClick={ this.reset }>RESET</button>
        </div>
      </div>
    );
  }

  increment(by) {
    this.setState(
      (prevState) => {
        return { counter: prevState.counter + by }
      }
    );
  }

  decrement(by) {
    this.setState(
      (prevState) => {
        return { counter: prevState.counter - by }
      }
    );
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }
}

function CounterButton(props) {
  return (
    <div className="counter" >
      <button onClick={ () => props.incrementMethod(props.by) }>+{ props.by }</button>
      <button onClick={ () => props.decrementMethod(props.by) }>-{ props.by }</button>
    </div>
  );

}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
  incrementMethod: PropTypes.func,
  decrementMethod: PropTypes.func,
}

export default Counter;
