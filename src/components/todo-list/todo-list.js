import React from 'react';

import TodoListItem from './todo-list-item';

function TodoList({ todoData }) {
  console.log('todoData', todoData)

  const elements = todoData.map((item) => {
    console.log('item :', item);
    return (
      <ul>
        <TodoListItem
          content={item.content}
          done={item.done}
          important={item.important}
        />
      </ul>
    );
  })


  return (
    <ul>
      {elements}
    </ul>
  );
}

export default TodoList;