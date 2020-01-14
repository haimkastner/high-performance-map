import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { ScreenPosition } from '../../models/models';
import { subscribeHookState } from '../../services/stats-store';
import { LayoutItem } from './LayoutItem';
import { DownBar, MapButtons, NavBar, UpBar } from './LayoutItems';
import { MapButtonsMenu } from './LayoutItems/MapButtonsMenu';

/**
 * to customize design for ui components in the future.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bars: {
      // for future custom design
    },
  }),
);

/**
 * The bars layout,
 * The bars are returned with their unique css design by using @LayoutItem .
 * @returns all the bars above our map.
 */
export function Bars() {
  const classes = useStyles();
  const [mapButtonsMenuCenterDis, setMapButtonsMenuCenterDis] = useState('calc(50vh - 210px)');
  const [showMapButtonsMenu, setShowMapButtonsMenu] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showPlatformMenu, setShowPlatformMenu] = useState(false);
  const [selectedPlatformPosition, setSelectedPlatformPosition] = useState<ScreenPosition>({ x: 0, y: 0 });

  useEffect(() => {
    subscribeHookState('mapButtonsMenuCenterDis', setMapButtonsMenuCenterDis);
    subscribeHookState('showMapButtonsMenu', setShowMapButtonsMenu);
    subscribeHookState('showNavBar', setShowNavBar);
    subscribeHookState('showPlatformMenu', setShowPlatformMenu);
    subscribeHookState('selectedPlatformPosition', setSelectedPlatformPosition);
  }, []);

  return (
    <Box className={classes.bars}>
      <LayoutItem opacity={0.5} color={'#016976'} height={'41px'} top={0} width={'100vw'} left={0}>
        <UpBar />
      </LayoutItem>
      <LayoutItem opacity={0.5} color={'#016976'} height={'419px'} width={'60px'} left={0} top={'calc(50vh - 210px)'}>
        <MapButtons />
      </LayoutItem>
      {showMapButtonsMenu ? (
        <LayoutItem
          opacity={0.5}
          color={'red'}
          height={'500px'}
          width={'400px'}
          left={60}
          top={`calc(50vh + ${mapButtonsMenuCenterDis}px)`}
        >
          <MapButtonsMenu></MapButtonsMenu>
        </LayoutItem>
      ) : (
        <Box />
      )}
      {showPlatformMenu ? (
        <LayoutItem
          opacity={0.5}
          color={'gray'}
          top={`calc(${selectedPlatformPosition.y}px - 100px)`}
          left={`calc(${selectedPlatformPosition.x}px - 100px)`}
          height={'200px'}
          width={'200px'}
        >
          <Box> This is the platform menu </Box>
        </LayoutItem>
      ) : (
        <Box />
      )}
      <LayoutItem
        opacity={0.5}
        // color={"transparent"}
        color={'#016976'}
        height={'419px'}
        width={'60px'}
        right={0}
        top={'calc(50vh - 210px)'}
      >
        <MapButtons />
      </LayoutItem>
      {showNavBar ? (
        <LayoutItem
          opacity={0.5}
          color={'transparent'}
          height={'66px'}
          width={'1000px'}
          right={'calc(50vw - 500px)'}
          top={90}
        >
          <NavBar />
        </LayoutItem>
      ) : (
        <Box />
      )}
      <LayoutItem opacity={0.5} color={'#016976'} height={'41'} bottom={0} width={'100vw'} left={0}>
        <DownBar />
      </LayoutItem>
    </Box>
  );
}
