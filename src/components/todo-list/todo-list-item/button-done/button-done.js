import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonDone({ done = false, onDone }) {

	const style = {
		margin: 10,
		color: done ? 'darkcyan' : ''
	}

	const onClick = () => {
		onDone();
	}

	return (
		<Button
			variant="contained"
			style={style}
			onClick={onClick}
		>done</Button>
	)
}