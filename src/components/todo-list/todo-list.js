import React, { Fragment } from 'react';

import TodoListItem from './todo-list-item';

function TodoList({ todoData }) {

  const elements = todoData.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <Fragment key={id}>
        <TodoListItem {...itemProps} />
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