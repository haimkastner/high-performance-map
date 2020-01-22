import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { MapButtonIcon } from '../../Content/MapButtons/MapButtonIcon';

export class DownBar extends React.Component {
  public render() {
    return (
      <Grid container direction="row" justify="space-around" alignItems="center"> 
      <MapButtonIcon imageName={'logo-copy-3-check-circle.svg'} width="24" height="34"></MapButtonIcon>
      <MapButtonIcon imageName={'logo-copy-3-alert-circle.svg'} width="24" height="34"></MapButtonIcon>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </Grid>
    );
  }
}
