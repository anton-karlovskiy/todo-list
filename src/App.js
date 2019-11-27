
import React, { useState, useCallback } from 'react';

import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'BMW'
    },
    {
      id: '2',
      text: 'Audi'
    },
    {
      id: '3',
      text: 'Siemens'
    }
  ]);

  const addTodoHandler = useCallback(text => {
    const id = Math.random().toString();
    const newTodos = [...todos, { text, id }];
    setTodos(newTodos);
  }, [todos]);
  
  const removeTodoHandler = useCallback(id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }, [todos]);

  return (
    <div className='app'>
      <div className='todo-list'>
        { todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodoHandler} />
        )) }
        <TodoForm addTodo={addTodoHandler} />
      </div>
    </div>
  );
};

export default App;
