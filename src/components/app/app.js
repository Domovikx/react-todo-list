import React from 'react';

import AppBaseHeader from '../app-base-heder'
import AppIinformation from '../app-information'
import TodoList from '../todo-list'
import AppOther from '../app-other';

// import Paper from '@material-ui/core/Paper';



function App() {
  return (
    <div className="app">
      <AppBaseHeader />
      <AppIinformation />
      <TodoList />
      <AppOther />
    </div>
  );
}

export default App;
