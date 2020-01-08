import React from "react";
import styles from "./Styles/NavBar.module.css";
import { Box, Grid } from "@material-ui/core";
import { NavBarItem } from "../../Content/NavBar/NavBarItem";
import { Platform } from "../../../models/models";
import { subscribeState, unsubscribeState } from "../../../services/stats-store";

interface GridProps {
  direction: "row-reverse" | "row" | "column" | "column-reverse" | undefined;
  justify:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline"
    | undefined;
}

interface State {
  selectedPlatform: Platform;
}
export class NavBar extends React.Component<any, State> {
  state: State = {
    selectedPlatform: {
      ID: -1,
      Name: "unknown",
      PlatformType: "Aircraft",
      Spacial: {
        Movement: {
          Course: NaN,
          Speed: NaN
        },
        Position: {
          Altitude: NaN,
          Latitude: NaN,
          Longitude: NaN
        }
      }
    }
  };

  selectedPlatformToken : any;
  componentDidMount() {
    this.selectedPlatformToken = subscribeState("selectedPlatform", this);
  }
  componentWillUnmount() {
    unsubscribeState(this.selectedPlatformToken);
  }
  
  navItemHeight = "66px";
  navItemsPaddingFactor = 10;

  navDirectionWidth = 100;
  navSpeedWidth = 132;
  navOwnshipDirectionWidth = 120;
  navOwnshipRangeWidth = 159;
  navAltitudeWidth = 161;
  navSettingsWidth = 120;

  baseGridStyle = {
    width: "100%",
    height: "100%"
  };

  firstGridStyle = {
    width:
      this.navDirectionWidth + this.navItemsPaddingFactor + this.navSpeedWidth
  };

  secondGridStyle = {
    width:
      this.navOwnshipDirectionWidth +
      this.navItemsPaddingFactor +
      this.navOwnshipRangeWidth
  };

  thirdGridStyle = {
    width:
      this.navAltitudeWidth + this.navItemsPaddingFactor + this.navSettingsWidth
  };

  rowGridProps: GridProps = {
    direction: "row-reverse",
    justify: "space-between",
    alignItems: undefined
  };

  render() {
    return (
      <Grid
        style={this.baseGridStyle}
        container
        direction="row-reverse"
        justify="space-around"
        alignItems="center"
      >
        <Grid
          style={this.firstGridStyle}
          container
          direction={this.rowGridProps.direction}
          justify={this.rowGridProps.justify}
        >
          <NavBarItem
            name="כיוון הפלגה"
            value={this.state.selectedPlatform.Spacial.Movement.Course}
            height={this.navItemHeight}
            width={this.navDirectionWidth}
          ></NavBarItem>
          <NavBarItem
            name="מהירות"
            value={this.state.selectedPlatform.Spacial.Movement.Speed}
            height={this.navItemHeight}
            width={this.navSpeedWidth}
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
          <NavBarItem
            name="הגדרות"
            value={'?'}
            height={this.navItemHeight}
            width={this.navSettingsWidth}
          ></NavBarItem>
        </Grid>
      </Grid>
    );
  }
}
