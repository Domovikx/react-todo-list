import React from 'react';

import { Grid, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: 10,
    color: ''
  }
}));

function TodoListItem({ content, done = false, important = false }) {

  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >

      <Grid >
        <Typography>{content}</Typography>
      </Grid>

      <Grid >
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
