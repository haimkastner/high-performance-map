import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  MenuItem,
  TextFieldProps
} from "@material-ui/core";

interface Props {
  children? : JSX.Element;
  width: number | string;
  height: number | string;
  name: string;
  value: number | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navItemInput: {
      color: '#FFFFFF',	
      borderStyle: 'solid',
      borderColor : "rgba(255, 255, 255, 0.5)",
      borderWidth: 1,
      opacity: 0.6,
      backgroundColor: "#1D1D1D",
      fontFamily: "Assistant",
      boxSizing : "border-box",
      textAlign : "center",
    },
    navItemName: {
      color: '#FFFFFF',	
      fontFamily: "Assistant",
      fontSize: 16,
      fontWeight: 600,
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
      direction="row"
      justify="space-around"
      alignItems="center"
     style={navItemStyle}
    >
      <Typography id="name" className={classes.navItemName} >{props.name}</Typography>
      <Typography id="value" className={classes.navItemInput} style={navItemStyle}>{props.value.toString()}</Typography>
    </Grid>
  );
}
