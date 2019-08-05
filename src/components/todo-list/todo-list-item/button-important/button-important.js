import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonImportant({ important = false }) {

    const style = {
        margin: 10,
        color: important ? 'crimson' : ''
    }

    return (
        <Button
            variant="contained"
            style={style}
        >important</Button>
    )
}