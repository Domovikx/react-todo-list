import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  }
}));


function onInputChange(event) {
  console.log(event.target.value);
}

export default function TextAreaMultiline() {
  const classes = useStyles();
  return (
    <TextField
      id="standard-textarea"
      label="Please enter your text"
      placeholder="..."
      multiline
      className={classes.textField}
      margin="normal"
      onChange={onInputChange}
    />
  );
}
