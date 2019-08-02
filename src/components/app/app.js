import React from 'react';

import AppBaseHeader from '../app-base-heder'
import AppSearchPanel from '../app-search-panel'
import TodoList from '../todo-list'
import AppAddItemPanel from '../app-add-item-panel';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <>
    <CssBaseline />
    <AppBaseHeader />
    <AppSearchPanel />
    <TodoList />
    <AppAddItemPanel />
  </>
);

export default App;