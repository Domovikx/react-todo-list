import React from 'react';
import Button from '@material-ui/core/Button';

export default function TheButton({ onAdd }) {

  const style = {
    margin: 10
  }

  return (
    <Button
      style={style}
      onClick={onAdd}
    >Add</Button>
  )

}