import { Box, Button } from '@material-ui/core';
import React from 'react';
import { setSharedState, subscribeState, unsubscribeState } from '../../../services/stats-store';
import { MapButtonIcon } from './MapButtonIcon';

interface State {
  showMapButtonsMenu: boolean;
  speed: string;
}

export class EditButton extends React.Component<any, State> {
  public token: any;

  public state: State = {
    showMapButtonsMenu: false,
    speed: '111',
  };

  public publish = () => {
    setSharedState('mapButtonsMenuCenterDis', -60);
    setSharedState('showMapButtonsMenu', this.state.showMapButtonsMenu ? false : true);
    setSharedState('direction', 100);
  };

  public componentDidMount() {
    this.token = subscribeState('speed', this);
    this.token = subscribeState('showMapButtonsMenu', this);
  }
  public componentWillUnmount() {
    unsubscribeState(this.token);
  }

  public render() {
    return (
      <Box>
        <Button onClick={this.publish}>
          <MapButtonIcon imageName={'display-copy-shape-2@2x.png'}></MapButtonIcon>
        </Button>
      </Box>
    );
  }
}
