import React, { Component } from 'react';

import AppBaseHeader from '../app-base-heder'
import AppSearchPanel from '../app-search-panel'
import TodoList from '../todo-list'
import AppAddItemPanel from '../app-add-item-panel';

import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createNewItem('1'),
      this.createNewItem('2'),
      this.createNewItem('3')
    ]
  }

  createNewItem(content) {
    return {
      content,
      done: false,
      important: false,
      id: this.maxId++
    }
  }

  idx = (id) => this.state.todoData.findIndex((el) => el.id === id)

  onDelited = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.idx(id)
      const newTodoData = [...todoData]
      newTodoData.splice(idx, 1)
      return { todoData: newTodoData }
    })
  }
  onAdd = (content) => {
    console.log('add');
    this.setState(({ todoData }) => {
      const newItem = this.createNewItem(content)
      return { todoData: [...todoData, newItem] }
    })
  }
  onImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.idx(id)
      const newTodoData = [...todoData]
      const oldItem = newTodoData[idx]
      const newItem = { ...oldItem, important: !oldItem.important }
      newTodoData[idx] = newItem;
      return { todoData: newTodoData }
    })
  }
  onDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.idx(id)
      const newTodoData = [...todoData]
      const oldItem = newTodoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      newTodoData[idx] = newItem;
      return { todoData: newTodoData }
    })
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
        <AppAddItemPanel
          onAdd={this.onAdd}
        />
      </>
    )
  }
}

export default App;