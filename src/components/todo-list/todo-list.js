import React from 'react';

import TodoListItem from './todo-list-item';

function TodoList() {
  return (
    <ul>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
}

export default TodoList;