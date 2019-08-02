import React from 'react';

import { Grid, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: 10,
    color: ''
  }
}));


const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `;

function TodoListItem() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center">

      <Grid>
        <Typography>{message}</Typography>
      </Grid>

      <Grid>
        <Button variant="contained"
          className={classes.button}>
          important</Button>
        <Button variant="contained"
          className={classes.button}>
          done</Button>
        <Button variant="contained"
          className={classes.button}>
          del</Button>
      </Grid>

    </Grid>
  );
}

export default TodoListItem;
