import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { Bars } from "./Layout/Bars";
import { SeamMap } from "./Map/SeamMap";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: { }
  })
);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Box>
      <Bars />
      <SeamMap />
    </Box>
  );
}
