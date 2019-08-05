import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonDone({ done = false }) {

    const style = {
        margin: 10,
        color: done ? 'darkcyan' : ''
    }

    return (
        <Button
            variant="contained"
            style={style}
        >done</Button>
    )
}