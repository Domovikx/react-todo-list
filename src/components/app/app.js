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
        { content: '1', done: false, important: false },
        { content: '2', done: true, important: false },
        { content: '3', done: true, important: true }
      ]
    }
  }



  render() {
    // console.log('this.todoData :', this.state.todoData);
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