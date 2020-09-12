// https://material-ui.com/components/lists/
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


MessagesList.propTypes = {
    messages: PropTypes.string,
    users: PropTypes.string
};

export default function MessagesList(props) {
    const classes = useStyles();

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setMessages(props.messages);
        setUsers(props.users);
    }, [props.messages, props.users]);
    
    return (
        <List dense className={classes.root}>
            {messages.map((msg, i) => {
                const labelId = `checkbox-list-secondary-label-${users[i]}-${msg}`;
                return (
                    <ListItem key={msg} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${users[i]}`}
                                src={`/static/images/avatar/${users[i]}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${msg}`} />
                    </ListItem>
                );
            })}
        </List>
    );
}
