import React, { useState } from 'react';

function TodoForm({ addTodo }) {
	const [ value, setValue ] = useState({
		text: '',
		deadline: ''
	});
	console.log('this is from form state', value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) return;
		addTodo(value);
		setValue({
			text: '',
			deadline: ''
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="text"
				type="text"
				className="input"
				placeholder="Enter activity here.."
				value={value.text}
				onChange={(e) => setValue({ ...value, text: e.target.value })}
			/>
			<br />

			<input
				type="datetime-local"
				name="deadline"
				className="dateInput"
				value={value.deadline}
				onChange={(e) => setValue({ ...value, deadline: e.target.value })}
			/>
			<br />
			<br />
		</form>
	);
}

export default TodoForm;
