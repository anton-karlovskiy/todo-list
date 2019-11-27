
import React, { useState } from 'react';

import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const onChangeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <form className='todo-form' onSubmit={onSubmitHandler}>
      <input
        type='text'
        className='todo-text'
        value={value}
        onChange={onChangeHandler} />
      <button className='add-todo'>Add</button>
    </form>
  );
};

export default TodoForm;
