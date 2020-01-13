import { Box, Button } from '@material-ui/core';
import React from 'react';
import { Platform } from '../../../models/models';
import { setSharedState } from '../../../services/stats-store';
import { MapButtonIcon } from './MapButtonIcon';

export class MoveButton extends React.Component {
  public dir = 50;
  public selectPlatform = () => {
    const platform: Platform = {
      ID: 5555,
      Name: '5555',
      PlatformType: 'Aircraft',
      Spacial: {
        Movement: {
          Course: this.dir++,
          Speed: 400,
        },
        Position: {
          Altitude: 0,
          Latitude: 70,
          Longitude: 44,
        },
      },
    };
    setSharedState('selectedPlatform', platform);
    setSharedState('showNavBar', true);
  };

  public render() {
    return (
      <Box>
        <Button onClick={this.selectPlatform}>
          <MapButtonIcon imageName={'sensors-move@2x.png'} width="19" height="19"></MapButtonIcon>
        </Button>
      </Box>
    );
  }
}
