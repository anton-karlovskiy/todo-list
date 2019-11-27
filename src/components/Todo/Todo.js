
import React from 'react';

import './Todo.css';

const Todo = ({ todo, removeTodo }) => {
  const onRemoveHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <div className='todo'>
      <span>{todo.text}</span>
      <button onClick={onRemoveHandler}>x</button>
    </div>
  );
};

export default Todo;
