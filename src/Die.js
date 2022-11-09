import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		numWords : [
			'one',
			'two',
			'three',
			'four',
			'five',
			'six'
		],
		val      : 6
	};
	handleClick = evt => {
		this.props.handleClick(this.props.idx);
	};
	render() {
		let classes = ` Die fas fa-dice-${this.props
			.numWords[this.props.val - 1]} fa-5x `;
		if (this.props.locked) classes += 'Die-locked';
		if (this.props.rolling) classes += 'Die-rolling';
		return (
			<i
				className={classes}
				onClick={this.handleClick}
				disabled={this.props.disabled}
			/>
		);
	}
}

export default Die;
