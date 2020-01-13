import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Item, Menu, MenuProvider, Separator, theme } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import PerformanceMap from './PerformanceMap';

function mockClickFunc(event: string) {
  // tslint:disable-next-line: no-console
  console.log(`${event} clicked`);
}
// create your menu first
const MapContextMenu = () => (
  <Menu id="menu_id" theme={theme.dark}>
    <Item
      onClick={() => {
        mockClickFunc('add');
      }}
    >
      הוסף ישות
    </Item>
    <Separator />
    <Item
      onClick={() => {
        mockClickFunc('open');
      }}
    >
      פתח סרגל
    </Item>
    <Separator />
    <Item
      onClick={() => {
        mockClickFunc('active');
      }}
    >
      הפעל את כל הישויות
    </Item>
    <Separator />
    <Item
      onClick={() => {
        mockClickFunc('hide');
      }}
    >
      הסתר את כל הגילויים
    </Item>
  </Menu>
);

const useStyles = makeStyles(() =>
  createStyles({
    map: {
      opacity: 1, // for future custom design
    },
    contextMenu: {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      backgroundColor: 'blue',
      opacity: 0.9999999,
    },
    openedContextMenu: {
      textAlign: 'right',
    },
  }),
);

export function SeamMap() {
  const classes = useStyles();

  return (
    <Box>
      <MenuProvider id="menu_id" className={classes.contextMenu}>
        <Box className={classes.map}>
          <PerformanceMap />
        </Box>
      </MenuProvider>
      <MapContextMenu />
    </Box>
  );
}
