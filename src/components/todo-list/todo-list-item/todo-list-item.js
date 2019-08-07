import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ButtonDel from './button-del';
import ButtonDone from './button-done';
import ButtonImportant from './button-important';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
    backgroundColor: 'whitesmoke',    
  },
  typography: {
    color: 'black',
  },
}));

function TodoListItem({ content, done = false, important = false, ...props }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.paper}>
        <Grid >
          <Typography className={classes.typography}>
            {content}
          </Typography>
        </Grid>

        <Grid >
          <ButtonImportant
            important={important}
            onImportant={props.onImportant}
          />
          <ButtonDone
            done={done}
            onDone={props.onDone}
          />
          <ButtonDel
            onDelited={props.onDelited}
          />

        </Grid>
      </Paper>
    </Grid>
  );
}

export default TodoListItem;
