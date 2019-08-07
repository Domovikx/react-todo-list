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


export default function TextAreaMultiline({ onInputChange, content }) {
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
      value={content}
    />
  );
}
