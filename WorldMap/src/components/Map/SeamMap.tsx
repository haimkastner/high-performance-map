import React from 'react';
import PerformanceMap from './PerformanceMap';
import Box from '@material-ui/core/Box';
import { MenuProvider, Menu, Item, Separator, theme } from 'react-contexify';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import 'react-contexify/dist/ReactContexify.min.css';

// create your menu first
const MapContextMenu = () => (
    <Menu id='menu_id' theme={theme.dark}>
        <Item onClick={() => { }}>הוסף ישות</Item>
        <Separator />
        <Item onClick={() => { }}>פתח סרגל</Item>
        <Separator />
        <Item onClick={() => { }}>הפעל את כל הישויות</Item>
        <Separator />
        <Item onClick={() => { }}>הסתר את כל הגילויים</Item>
    </Menu>
);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        map: {
            opacity: 1 //for future custom design
        },
        contextMenu: {
            width: "100vw",
            height: "100vh",
            position: "absolute",
            backgroundColor: 'blue',
            opacity: 0.9999999
        },
        openedContextMenu: {
            textAlign: "right"
        },
    })
);


export function SeamMap() {
    const classes = useStyles();

    return (<Box>
        <MenuProvider id="menu_id" className={classes.contextMenu}>
            <Box className={classes.map}>
                <PerformanceMap />
            </Box>
        </MenuProvider>
        < MapContextMenu />
    </Box >);
}
