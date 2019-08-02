import React from 'react';

import AppBaseHeader from '../app-base-heder'
import AppSearchPanel from '../app-search-panel'
import TodoList from '../todo-list'
import AppOther from '../app-other';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <>
    <CssBaseline />
    <AppBaseHeader />
    <AppSearchPanel />
    <TodoList />
    <AppOther />
  </>
);

export default App;