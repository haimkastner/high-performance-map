import React from "react";
import { MoveButton } from "../../Content/MapButtons/MoveButton";
import { MeasurementButton } from "../../Content/MapButtons/MeasurementButton";
import { EditButton } from "../../Content/MapButtons/EditButton";
import { ShipButton } from "../../Content/MapButtons/ShipButton";
import { ZoomInButton } from "../../Content/MapButtons/ZoomInButton";
import { ZoomOutButton } from "../../Content/MapButtons/ZoomOutButton";
import { Box, Grid, Theme, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
    }
  })
);

export function MapButtons() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <MoveButton />
      <MeasurementButton />
      <EditButton />
      <ShipButton />
      <ZoomInButton />
      <ZoomOutButton />
    </Grid>
  );
}
