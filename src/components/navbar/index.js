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
    ListItemIcon,
    Tooltip
} from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 55,
        background: "#dcdcdc",
        color: "#262626",
        height: "100%"
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
                    <Tooltip title="About" placement="right">
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("Portfolio")}>
                    <Tooltip title="Portfolio" placement="right">
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("Contact")}>
                    <Tooltip title="Contact" placement="right">
                        <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => props.handlePageChange("MainMenu")}>
                    <Tooltip title="Main Menu" placement="right">
                        <ListItemIcon><ViewColumnIcon /></ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button onClick={() => props.handlePageChange("/")}>
                    <Tooltip title="Home" placement="right">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button>
                    <Tooltip title="Email Me" placement="right">
                        <ListItemIcon>
                            <a id="email" href="mailto: dannykimble@me.com" style={{ color: "inherit" }}>
                                <MailIcon />
                            </a>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <IconButton
                aria-label="open drawer"
                onClick={toggleDrawer('menu', true)}
                edge="start"
            >
                <MenuIcon style={{color: "#f5f5f5"}}/>
            </IconButton>
            <Drawer open={state.menu} onClose={toggleDrawer('menu', false)}>
                {menuList('menu')}
            </Drawer>

        </div>
    );
}
