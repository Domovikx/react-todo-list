import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ButtonDel from './button-del';
import ButtonDone from './button-done';
import ButtonImportant from './button-important';

function TodoListItem({ content, done = false, important = false, ...props }) {

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >
      <Grid >
        <Typography>
          <pre style={{ fontFamily: 'inherit' }}>
            {content}
          </pre>
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

    </Grid>
  );
}

export default TodoListItem;
