import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import {
    Drawer,
    IconButton,
    List,
    Divider,
    ListItem,
    ListItemIcon
} from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 55,

    }
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        menu: false
    });

    const toggleDrawer = (menu, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [menu]: open });
    };

    const menuList = menu => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(menu, false)}
            onKeyDown={toggleDrawer(menu, false)}
        >
            <List>
                {
                    <ListItem button onClick={() => props.handlePageChange("About")}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                    </ListItem>
                }
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map(index => (
                    <ListItem button key={index}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('menu', true)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={state.menu} onClose={toggleDrawer('menu', false)}>
                {menuList('menu')}
            </Drawer>

        </div>
    );
}
