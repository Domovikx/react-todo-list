import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

export default function TheButton() {
  const classes = useStyles();
  return (
      <Button className={classes.button}>Add</Button>   
  );
}