import { React, useState } from 'react';
import './App.scss';
import TodoForm from './components/todoForm';
import TodoList from './components/todolist/index'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Coding' },
    { id: 2, title: 'Testing' },
    { id: 3, title: 'Fixbug' }
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('For submit', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1>React hooks - Todolist</h1>
      {/* <ColorBox/> */}
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
