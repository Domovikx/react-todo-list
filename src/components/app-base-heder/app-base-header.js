import React from 'react';
import { Typography, AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	}
}));

function AppBaseHeader({ countTodo, countDone, countImportant }) {

	const classes = useStyles();
	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					ToDo List Item: {countImportant()} {countDone()} {countTodo()}
				</Typography>
				<nav>
					<Link
						variant="button" color="textPrimary" className={classes.link}
						href="https://vk.com/domovikx" target='_blank' rel="noopener">
						vk
						</Link>
					<Link variant="button" color="textPrimary" className={classes.link}
						href="https://github.com/Domovikx" target='_blank' rel="noopener">
						GitHub
            </Link>
				</nav>
			</Toolbar>
		</AppBar>
	);
}

export default AppBaseHeader;