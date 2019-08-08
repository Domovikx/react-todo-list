import React, { Fragment } from 'react';

import TodoListItem from './todo-list-item';

function TodoList({ todoData, visibility, ...props }) {

  let elements = null;

  let rend = null;

  if (visibility.all) {
    elements = todoData.map((item) => {
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
  }
  if (visibility.done) {
    elements = todoData
      .filter((item) => item.done)
      .map((item) => {
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
  }
  if (visibility.important) {
    elements = todoData
      .filter((item) => item.important)
      .map((item) => {
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
  }

  return (
    <>
      {elements}
    </>
  );
}

export default TodoList;