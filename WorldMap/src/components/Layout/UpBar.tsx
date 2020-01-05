import React from "react";
import styles from "./Styles/UpBar.module.css";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
export class UpBar extends React.Component {
  render() {
    return (
      <Box className={styles.UpBar}>
        <Button>I am up button</Button>
      </Box>
    );
  }
}
