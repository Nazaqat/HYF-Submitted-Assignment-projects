import React from 'react';
import './App.css';

// https://api.github.com/search/users?q=${query}
//https://api.github.com/search/repositories?q=" + inputValue
function App() {
	const [ inputValue, setInputValue ] = React.useState('');
	const [ isLoading, setIsLoading ] = React.useState(false);
	const [ repos, setRepos ] = React.useState([]);
	// const [ input, setInput ] = React.useState(true);
	// const [ result, setResults ] = React.useState('');

	React.useEffect(
		() => {
			if (!inputValue) {
				return;
			}

			setIsLoading(true);
			// setInput(false);
			fetch('https://api.github.com/search/repositories?q=' + inputValue)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setIsLoading(false);
					setRepos(data.items.slice(0, 20));
					// setResults(data.items);
				})
				.catch((error) => {
					console.error(error);
				});
		},
		[ inputValue ]
	);

	console.log(repos);

	return (
		<div className="App">
			<header>Github repo Search!</header>

			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					setInputValue(evt.target.elements.query.value);
				}}
			>
				<input type="text" name="query" placeholder="Search Github repos.." />
			</form>

			{isLoading && <div>Loading...</div>}
			{/* {input !== inputValue && <div>No Input Value!</div>}
			{result !==setInputValue && <div>No repo found!</div>} */}

			<ul className="repoResponse">
				{repos.map((repo) => {
					return (
						<li key={repo.id}>
							<a href={repo.html_url} target="blank">
								{repo.name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
