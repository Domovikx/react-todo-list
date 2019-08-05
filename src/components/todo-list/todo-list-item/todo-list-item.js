import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: 10
  }
}));

function TodoListItem({ content, done = false, important = false }) {

  const classes = useStyles();

  const styleImportant = {
    color: important ? 'crimson' : ''
  }
  const styleDone = {
    color: done ? 'darkcyan' : ''
  }

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
          className={classes.button}
          style={styleImportant}
        >
          important</Button>
        <Button variant="contained"
          className={classes.button}
          style={styleDone}
        >
          done</Button>
        <Button variant="contained"
          className={classes.button}
        >
          del</Button>
      </Grid>

    </Grid>
  );
}

export default TodoListItem;
