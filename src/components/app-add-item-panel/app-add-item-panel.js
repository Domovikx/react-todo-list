import React from 'react';

import TextAreaMultiline from './text-area-multiline';
import TheButton from './the-button';
import { Grid } from '@material-ui/core';


export default function AppAddItemPanel({ onAdd }) {
	return (
		<Grid
			container xs item
			direction="row"
			justify="center"
			alignItems="stretch"
		>
			<Grid item xs={12} md={9}>
				<TextAreaMultiline />
			</Grid>
			<TheButton
				onAdd={()=> onAdd('123')}
		/>
		</Grid>
	);
}