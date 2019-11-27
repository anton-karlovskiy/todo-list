
import React, { useCallback } from 'react';

import './Todo.css';

const Todo = ({ todo, removeTodo }) => {
  const onRemoveHandler = useCallback(() => {
    removeTodo(todo.id);
  }, [todo, removeTodo]);

  return (
    <div className='todo'>
      <span>{todo.text}</span>
      <button onClick={onRemoveHandler}>x</button>
    </div>
  );
};

export default Todo;
