import React, { Component } from 'react';

import AppBaseHeader from '../app-base-heder'
import AppSearchPanel from '../app-search-panel'
import TodoList from '../todo-list'
import AppAddItemPanel from '../app-add-item-panel';

import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {

  state = {
    todoData: [
      { content: '1', done: false, important: false, id: 1 },
      { content: '2', done: true, important: false, id: 2 },
      { content: '3', done: true, important: true, id: 3 }
    ]
  }


  onDelited = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData]
      const idx = newTodoData.findIndex((el) => el.id === id)
      newTodoData.splice(idx, 1)
      return {
        todoData: newTodoData
      }
    }
    )


  }
  onImportant = (id) => {
    console.log(`Important ${id}`)
  }
  onDone = (id) => {
    console.log(`Done ${id}`)
  }

  render() {
    return (
      <>
        <CssBaseline />
        <AppBaseHeader />
        <AppSearchPanel />
        <TodoList
          todoData={this.state.todoData}
          onDelited={this.onDelited}
          onImportant={this.onImportant}
          onDone={this.onDone}
        />
        <AppAddItemPanel />
      </>
    )
  }
}

export default App;