import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
