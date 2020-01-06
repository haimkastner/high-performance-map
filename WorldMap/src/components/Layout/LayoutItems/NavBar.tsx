import React from "react";
import styles from "./Styles/NavBar.module.css";
import { Speed } from "../../Content/NavBar/Speed";
import { Direction } from "../../Content/NavBar/Direction";
import { Box } from "@material-ui/core";

export class NavBar extends React.Component {
  render() {
    return (
      <Box>
        <Speed></Speed>
        <Direction />
      </Box>
    );
  }
}
