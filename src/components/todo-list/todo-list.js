import React, { Fragment } from 'react';

import TodoListItem from './todo-list-item';

function TodoList({ todoData, ...props }) {

  const elements = todoData.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <Fragment key={id}>
        <TodoListItem
          {...itemProps}
          {...props}
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