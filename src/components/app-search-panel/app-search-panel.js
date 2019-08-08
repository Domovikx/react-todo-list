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


export default function AppSearchPanel({ visibility, onSearchPanel }) {
  const classes = useStyles();

  const onToggle = (toggle) => {
    visibility[toggle] = !visibility[toggle]
    onSearchPanel()
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
    >
      <Grid className={classes.grid}>
        <SearchField />
        <Button
          className={classes.btn}
          style={{ color: visibility.all ? 'darkcyan' : '' }}
          onClick={() => onToggle('all')}
        >All</Button>
        <Button
          className={classes.btn}
          style={{ color: visibility.done ? 'darkcyan' : '' }}
          onClick={() => onToggle('done')}
        >Done</Button>
        <Button
          className={classes.btn}
          style={{ color: visibility.important ? 'darkcyan' : '' }}
          onClick={() => onToggle('important')}
        >Important</Button>
      </Grid>
    </Grid>
  )
}