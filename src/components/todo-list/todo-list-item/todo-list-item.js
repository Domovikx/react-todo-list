import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


function TodoListItem() {
    const classes = useStyles();

    return (
        <li>
            <p>1</p>
            <Button variant="contained"
                color=""
                className={classes.button}>
                important
            </Button>
            <Button variant="contained"
                color=""
                className={classes.button}>
                del
            </Button>

        </li>
    );
}

export default TodoListItem;
