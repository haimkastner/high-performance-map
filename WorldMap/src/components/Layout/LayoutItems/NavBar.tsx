import { Grid } from '@material-ui/core';
import React from 'react';
import { Platform } from '../../../models/models';
import { subscribeState, unsubscribeState } from '../../../services/stats-store';
import { NavBarItem } from '../../Content/NavBar/NavBarItem';

interface GridProps {
  direction: 'row-reverse' | 'row' | 'column' | 'column-reverse' | undefined;
  justify: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline' | undefined;
}

interface State {
  selectedPlatform: Platform;
}
export class NavBar extends React.Component<any, State> {
  public state: State = {
    selectedPlatform: {
      ID: -1,
      Name: 'unknown',
      PlatformType: 'Aircraft',
      Spacial: {
        Movement: {
          Course: NaN,
          Speed: NaN,
        },
        Position: {
          Altitude: NaN,
          Latitude: NaN,
          Longitude: NaN,
        },
      },
    },
  };

  public selectedPlatformToken: any;

  public navItemHeight = '42px';
  public navItemsPaddingFactor = 10;

  public navDirectionWidth = 100;
  public navSpeedWidth = 132;
  public navOwnshipDirectionWidth = 120;
  public navOwnshipRangeWidth = 159;
  public navAltitudeWidth = 161;
  public navSettingsWidth = 120;

  public baseGridStyle = {
    height: '100%',
    width: '100%',
  };

  public firstGridStyle = {
    width: this.navDirectionWidth + this.navItemsPaddingFactor + this.navSpeedWidth,
  };

  public secondGridStyle = {
    width: this.navOwnshipDirectionWidth + this.navItemsPaddingFactor + this.navOwnshipRangeWidth,
  };

  public thirdGridStyle = {
    width: this.navAltitudeWidth + this.navItemsPaddingFactor + this.navSettingsWidth,
  };

  public rowGridProps: GridProps = {
    alignItems: undefined,
    direction: 'row-reverse',
    justify: 'space-between',
  };
  public componentDidMount() {
    this.selectedPlatformToken = subscribeState('selectedPlatform', this);
  }
  public componentWillUnmount() {
    unsubscribeState(this.selectedPlatformToken);
  }

  public render() {
    return (
      <Grid style={this.baseGridStyle} container direction="row-reverse" justify="space-around" alignItems="center">
        <Grid
          style={this.firstGridStyle}
          container
          direction={this.rowGridProps.direction}
          justify={this.rowGridProps.justify}
        >
          <NavBarItem
            name="כיוון ההפלגה"
            value={this.state.selectedPlatform.Spacial.Position.Latitude}
            height={this.navItemHeight}
            width={this.navDirectionWidth}
          ></NavBarItem>
          <NavBarItem
            name="מהירות"
            value={this.state.selectedPlatform.Spacial.Position.Longitude}
            height={this.navItemHeight}
            width={this.navSpeedWidth}
            // children={this.textbox}
          ></NavBarItem>
        </Grid>
        <Grid
          style={this.secondGridStyle}
          container
          direction={this.rowGridProps.direction}
          justify={this.rowGridProps.justify}
          alignItems={this.rowGridProps.alignItems}
        >
          <NavBarItem
            name="כיוון מספינתי"
            value={-1}
            height={this.navItemHeight}
            width={this.navOwnshipDirectionWidth}
          ></NavBarItem>
          <NavBarItem
            name="טווח מספינתי"
            value={-1}
            height={this.navItemHeight}
            width={this.navOwnshipRangeWidth}
          ></NavBarItem>
        </Grid>
        <Grid
          style={this.thirdGridStyle}
          container
          direction={this.rowGridProps.direction}
          justify={this.rowGridProps.justify}
          alignItems={this.rowGridProps.alignItems}
        >
          <NavBarItem
            name="גובה/עומק"
            value={this.state.selectedPlatform.Spacial.Position.Altitude}
            height={this.navItemHeight}
            width={this.navAltitudeWidth}
          ></NavBarItem>
          <NavBarItem name="הגדרות" value={'?'} height={this.navItemHeight} width={this.navSettingsWidth}></NavBarItem>
        </Grid>
      </Grid>
    );
  }
}
