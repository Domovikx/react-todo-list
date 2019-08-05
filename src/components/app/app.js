import React, { Component } from 'react';

import AppBaseHeader from '../app-base-heder'
import AppSearchPanel from '../app-search-panel'
import TodoList from '../todo-list'
import AppAddItemPanel from '../app-add-item-panel';

import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { content: '1', done: false, important: false, id:1 },
        { content: '2', done: true, important: false, id:2 },
        { content: '3', done: true, important: true, id:3 }
      ]
    }
  }



  render() {
    return (
      <>
        <CssBaseline />
        <AppBaseHeader />
        <AppSearchPanel />
        <TodoList
          todoData={this.state.todoData}
        />
        <AppAddItemPanel />
      </>
    )
  }
}

export default App;