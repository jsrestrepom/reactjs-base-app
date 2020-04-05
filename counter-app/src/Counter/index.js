import React, { useState, useCallback } from 'react';

const functions = new Set();

export default function () {
  const [counter, setCounter] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);

  const handleDecrementClick = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const handleIncrementClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const doSomething = useCallback(
    () => {
      alert(`The value for the another counter is ${anotherCounter}.`);
      setAnotherCounter(1125);
    },
    [anotherCounter]
  );

  functions.add(handleDecrementClick);
  functions.add(handleIncrementClick);
  functions.add(doSomething);

  console.log(functions);

  return (
    <>
      <span>{ counter }</span>
      <button onClick={ handleDecrementClick }>-</button>
      <button onClick={ handleIncrementClick }>+</button>
    </>
  );
};