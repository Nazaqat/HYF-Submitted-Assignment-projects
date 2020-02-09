import React, { useState, useEffect } from "react";
import Modal from './components/Modal'
import Header from './components/Header';
import AddRandom from './components/AddRandom';
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button type="checkBox" onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
       </div>
     
    </div>
    
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
   
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter activity here.."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Get out of bed",
      isCompleted: false
    },
    {
      text: "Brush teeth",
      isCompleted: false
    },
    {
      text: "Eat breakfast",
      isCompleted: true
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    if (index.length === 0) {
      return (
        <div>
        <ul>No activity defined at the moment</ul>
      </div>
      );
    }
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Modal>
      <Header></Header>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        </div>
        <AddRandom></AddRandom>
      </Modal>
     
              
      
    </div>
  );
}

export default App;



