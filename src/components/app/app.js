import React from 'react';

import AppBaseHeader from '../app-base-heder'
import AppIinformation from '../app-information'
import TodoList from '../todo-list'
import AppOther from '../app-other';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <>
    <CssBaseline />
    <AppBaseHeader />
    <AppIinformation />
    <TodoList />
    <AppOther />
  </>
);

export default App;