import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid
} from "@material-ui/core";

interface Props {
  width: number | string;
  height: number | string;
  name: string;
  value: number | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navItem: {
      backgroundColor: "white",
      opacity: 0.7
    }
  })
);

export function NavBarItem(props: Props) {
  const classes = useStyles();

  const navItemStyle = {
    width: props.width,
    height: props.height
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.navItem}
      style={navItemStyle}
    >
      <Typography>{props.name}</Typography>
      <Typography>{props.value.toString()}</Typography>
    </Grid>
  );
}
