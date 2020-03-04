import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [ 'You have appointment at there tommorrow', 'Brush teeth twice a day', 'Eat healthy' ],
			selectedNote: null,
			clicked: false
		};
	}

	handleClick = () => {
		this.setState({
			clicked: true,
			selectedNote: this.state.notes[Math.floor(Math.random() * this.state.notes.length)]
		});
	};

	render() {
		return (
			<div className="App">
				<button className="RandomActivity" onClick={this.handleClick}>
					Random Activity
				</button>
				<h1>{this.state.clicked && this.state.selectedNote}</h1>
			</div>
		);
	}
}
