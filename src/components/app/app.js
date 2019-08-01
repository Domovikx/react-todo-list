import React from 'react';

function App() {
  return (
    <div className="app">
      <AppBaseHeader />
      <AppIinformation />
      <TodoList />
      <TodoListItem />
    </div>
  );
}

function AppBaseHeader() {
  return (
    <h1>Todo List</h1>
  );
}

function AppIinformation() {
  return (
    <div>information</div>
  );
}

function TodoList() {
  return (
    <ul>
      <li>
        <p>1</p>
        <button>important</button>
        <button>del</button>
      </li>
    </ul>
  );
}

function TodoListItem() {
  return (
    <div>other</div>
  );
}


export default App;
