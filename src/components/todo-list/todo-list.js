import React, { Fragment } from 'react';

import TodoListItem from './todo-list-item';

function TodoList({ todoData, visibility, ...props }) {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Fragment key={id}>
        <TodoListItem
          {...itemProps}
          onDelited={() => props.onDelited(id)}
          onDone={() => props.onDone(id)}
          onImportant={() => props.onImportant(id)}
        />
      </Fragment>
    );
  })

  return (
    <>
      {elements}
    </>
  );
}

export default TodoList;