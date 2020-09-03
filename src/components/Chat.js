import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, TextField, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const Chat = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Chat!</h1>
            <FormControl className={classes.root}>
                <TextField className={classes.textField}
                    id="chat-input"
                    label="Message"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary">Submit</Button>
            </FormControl>
        </div>
    );};

export default Chat;
