import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { EditButton } from '../../Content/MapButtons/EditButton';
import { MeasurementButton } from '../../Content/MapButtons/MeasurementButton';
import { MoveButton } from '../../Content/MapButtons/MoveButton';
import { ShipButton } from '../../Content/MapButtons/ShipButton';
import { ZoomInButton } from '../../Content/MapButtons/ZoomInButton';
import { ZoomOutButton } from '../../Content/MapButtons/ZoomOutButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  }),
);

export function MapButtons() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column" justify="space-around" alignItems="center">
      <MoveButton />
      <MeasurementButton />
      <EditButton />
      <ShipButton />
      <ZoomInButton />
      <ZoomOutButton />
    </Grid>
  );
}
