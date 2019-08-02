import React from 'react';

import TextAreaMultiline from './text-area-multiline';
import TheButton from './the-button';
import { Grid } from '@material-ui/core';


export default function AppAddItemPanel() {
	return (
		<Grid
			container
			spacing={1}
			direction="row"
			justify="center"
			alignItems=""
		>
			<Grid item xs={12} sm={10}>
				<TextAreaMultiline />
			</Grid>
			<Grid container item xs={2} sm={2}
						alignItems="stretch"
			>
				<TheButton />
			</Grid>
		</Grid>
	);
}