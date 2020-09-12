// https://material-ui.com/components/lists/
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MessagesList(props) {
    const classes = useStyles();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(props.messages);
    }, [props.messages]);
    
    let user = ['user1', 'user2', 'user3', 'user4'];
    return (
        <List dense className={classes.root}>
            {messages.map((msg, i) => {
                const labelId = `checkbox-list-secondary-label-${user[i]}-${msg}`;
                return (
                    <ListItem key={msg} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${user[i]}`}
                                src={`/static/images/avatar/${user[i]}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${msg}`} />
                    </ListItem>
                );
            })}
        </List>
    );
}
