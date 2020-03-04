import React, { useState } from 'react';
import Header from './components/Header';
import AddRandom from './components/AddRandom';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import './App.css';

function App() {
	const [ todos, setTodos ] = useState([
		{
			text: 'Get out of bed',
			deadline: '16-02-2020',
			isCompleted: false
		},
		{
			text: 'Brush teeth',
			deadline: '16-03-2020',
			isCompleted: false
		},
		{
			text: 'Eat breakfast',
			deadline: '20-03-2020',
			isCompleted: true
		}
	]);

	const updateTodo = (index, text, deadline) => {
		const updatedTodos = todos.map((element, currentIndex) => {
			if (currentIndex == index) {
				return {
					...element,
					text: text,
					deadline: deadline
				};
			} else return element;
		});
		setTodos(updatedTodos);
		console.log('this is from updated todo', updatedTodos);
	};

	const addTodo = ({ text, deadline }) => {
		const newTodos = [ ...todos, { text, deadline } ];
		setTodos(newTodos);
		console.log('this is from new todo', newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			{/* <Modal> */}
			<Header />
			<TodoForm addTodo={addTodo} />
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
						updateTodo={updateTodo}
					/>
				))}
			</div>
			<AddRandom />
			{/* </Modal> */}
		</div>
	);
}

export default App;
