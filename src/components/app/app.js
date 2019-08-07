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
    ],
    content: ''
  }

  onInputChange = (event) => {
    this.setState({
      content: event.target.value
    })
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

  onAdd = () => {
    this.setState(({ todoData, content }) => {
      const newItem = this.createNewItem(content)
      return { todoData: [newItem, ...todoData], content: '' }
    })
  }

  toggleProp(arr, id, propName) {
    const newArr = [...arr]
    const idx = newArr.findIndex((el) => el.id === id)
    const oldItem = newArr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    newArr[idx] = newItem
    return newArr
  }
  onImportant = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = this.toggleProp(todoData, id, 'important')
      return { todoData: newTodoData }
    })
  }
  onDone = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = this.toggleProp(todoData, id, 'done')
      return { todoData: newTodoData }
    })
  }

  countTodo = () => this.state.todoData.length
  countDone = () => this.state.todoData.filter((el) => el.done).length
  countImportant = () => this.state.todoData.filter((el) => el.important).length

  render() {
    return (
      <>
        <CssBaseline />
        <AppBaseHeader
          countTodo={this.countTodo}
          countDone={this.countDone}
          countImportant={this.countImportant}
        />
        <AppSearchPanel />
        <AppAddItemPanel
          onAdd={this.onAdd}
          onInputChange={this.onInputChange}
          content={this.state.content}
        />
        <TodoList
          todoData={this.state.todoData}
          onDelited={this.onDelited}
          onImportant={this.onImportant}
          onDone={this.onDone}
        />
      </>
    )
  }
}

export default App;