import React from 'react';
import { Typography, Button, AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	// '@global': {
	// 	body: {
	// 		backgroundColor: theme.palette.common.white,
	// 	},
	// 	ul: {
	// 		margin: 0,
	// 		padding: 0,
	// 	},
	// 	li: {
	// 		listStyle: 'none',
	// 	},
	// },
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
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor: theme.palette.grey[200],
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	// footer: {
	// 	borderTop: `1px solid ${theme.palette.divider}`,
	// 	marginTop: theme.spacing(8),
	// 	paddingTop: theme.spacing(3),
	// 	paddingBottom: theme.spacing(3),
	// 	[theme.breakpoints.up('sm')]: {
	// 		paddingTop: theme.spacing(6),
	// 		paddingBottom: theme.spacing(6),
	// 	},
	// },
}));

function AppBaseHeader() {

	const classes = useStyles();

	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					ToDo List Item
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