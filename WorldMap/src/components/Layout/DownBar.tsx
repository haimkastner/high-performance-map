import React from "react";
import styles from "./Styles/DownBar.module.css";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
export class DownBar extends React.Component {
  render() {
    return (
      <Box className={styles.DownBar}>
        <Button>I am DownBar button</Button>
      </Box>
    );
  }
}
