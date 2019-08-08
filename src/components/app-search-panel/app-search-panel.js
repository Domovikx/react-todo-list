import React from 'react';
import SearchField from './search-field';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  grid: {
    marginRight: theme.spacing(1),
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function AppSearchPanel() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
    >
      <Grid className={classes.grid}>
        <SearchField />
        <Button className={classes.btn}>Done</Button>
        <Button className={classes.btn}>Important</Button>
      </Grid>
    </Grid>
  )
}