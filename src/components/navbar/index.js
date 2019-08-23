import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
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
                <ListItem button onClick={() => props.handlePageChange("About")}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("Portfolio")}>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("Contact")}>
                    <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => props.handlePageChange("MainMenu")}>
                    <ListItemIcon><ViewColumnIcon /></ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("/")}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <a href="mailto: dannykimble@me.com" style={{ color: "inherit" }}>
                            <MailIcon />
                        </a>
                    </ListItemIcon>
                </ListItem>
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
