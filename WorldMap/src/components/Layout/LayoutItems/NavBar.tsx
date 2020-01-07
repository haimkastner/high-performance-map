import React from "react";
import styles from "./Styles/NavBar.module.css";
import { Speed } from "../../Content/NavBar/Speed";
import { Direction } from "../../Content/NavBar/Direction";
import { Box } from "@material-ui/core";

export class NavBar extends React.Component<any, { speed: boolean }> {
  state: { speed: boolean } = {
    speed: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        speed: true
      });
    }, 4000);
  }

  render() {
    return (
      <Box>
        {this.state.speed ? <Direction></Direction> : ""}
        <Speed />
      </Box>
    );
  }
}
