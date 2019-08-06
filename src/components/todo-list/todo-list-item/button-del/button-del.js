import React from 'react';
import Button from '@material-ui/core/Button';


export default function ButtonDel({ onDelited }) {

	const style = {
		margin: 10
	}

	const onClick = () => {
		onDelited();
	}

	return (
		<Button
			variant="contained"
			style={style}
			onClick={onClick}
		>del</Button>
	)
}