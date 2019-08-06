import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonImportant({ important = false, onImportant }) {

	const style = {
		margin: 10,
		color: important ? 'crimson' : ''
	}

	const onClick = () => {
		onImportant()
	}

	return (
		<Button
			variant="contained"
			style={style}
			onClick={onClick}
		>important</Button>
	)
}