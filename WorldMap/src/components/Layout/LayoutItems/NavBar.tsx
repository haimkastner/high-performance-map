import React from "react";
import styles from "./Styles/NavBar.module.css";
import { Box, Grid, TextField, MenuItem } from "@material-ui/core";
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
  //  speedType = [
  //   {
  //     value: 'קשר',
  //     label: 'קשר',
  //   },
  //   {
  //     value: 'מייל',
  //     label: 'מייל',
  //   },
  //   {
  //     value: 'קסטנר',
  //     label: 'קסטנר',
  //   },
  // ];

  // constructor(props : any) {
  //   super(props);
  //   this.speedType = [{
  //     value: 'קשר',
  //     label: 'קשר',
  //   }]
  //     };


  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({speedType: this.speedType.values[1]});
  // }
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
  
  navItemHeight = "42px";
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

//   const textbox =   <TextField
//   id="standard-select-currency"
//   select
//   label="Select"
//   value={speedType}
//   onChange={handleChange}
//   helperText="Please select your currency"
// >
//   {/* {speedType.map(option => (
//     <MenuItem key={option.value} value={option.value}>
//       {option.label}
//     </MenuItem>
//   ))} */}
//   </TextField>;

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
