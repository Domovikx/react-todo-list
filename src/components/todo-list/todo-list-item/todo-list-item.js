import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ButtonDel from './button-del';
import ButtonDone from './button-done';
import ButtonImportant from './button-important';


function TodoListItem({ content, done = false, important = false }) {

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
        <ButtonImportant important={important} />
        <ButtonDone done={done} />
        <ButtonDel />
      </Grid>

    </Grid>
  );
}

export default TodoListItem;
