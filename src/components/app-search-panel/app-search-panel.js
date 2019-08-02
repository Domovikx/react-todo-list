import React from 'react';
import SearchField from './search-field';
import { Grid, Button } from '@material-ui/core';

export default function AppSearchPanel() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
    >
      <Grid
        style={{ marginRight: 10 }}
      >
        <SearchField />
        <Button>Search</Button>
        <Button>Done</Button>
        <Button>Important</Button>
      </Grid>
    </Grid>
  )
}