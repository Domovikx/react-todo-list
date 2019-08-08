import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '95%',
    }
}));

export default function SearchField({ onSetSearchText }) {
    const classes = useStyles();

    let onChange = (e) => {
        const text = e.target.value
        onSetSearchText(text)
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
                onChange={onChange}
            />
        </form>
    );
}
