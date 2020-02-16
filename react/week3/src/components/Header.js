import React, { useState, useEffect } from 'react';
// import './ListItems.css';

function Header() {
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		document.title = `todo project`;

		var timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div className="sticky-top">
			<h1 className="todoHeading">Todo List</h1>
			<h3 className="todoHeading">You have used {count} second(s) on this website - since last refresh</h3>
		</div>
	);
}

export default Header;
