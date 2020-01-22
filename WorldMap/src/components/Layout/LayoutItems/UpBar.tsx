
import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { MapButtonIcon } from '../../Content/MapButtons/MapButtonIcon';
import CurrentDate from './DateBar';
import Clock from './TimeBar';
import './UpBarCss.css';


export class UpBar extends React.Component {

  constructor(props : any) {
    super(props);

  }
  public render() {

    return (
      <Grid container className="text_bar" direction="row" justify="space-around" alignItems="center"> 
      <MapButtonIcon imageName={'logo-copy-3-clock.svg'} width="24" height="34"></MapButtonIcon>
        <Clock/>
        <CurrentDate />
        <MapButtonIcon imageName={'logo-copy-3-search.svg'} width="24" height="34"></MapButtonIcon>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>00:00:00</p>
        <MapButtonIcon imageName={'logo-copy-3-play-circle.svg'} width="24" height="34"></MapButtonIcon>
        <p>תצוגה</p>
        <p>כלים</p>
        <p>מערכות</p>
        <p>פעולות</p>
        <p>שליטה</p>
        <img height="13px" width="126px" src="https://projects.invisionapp.com/assets/17684313/616175047/4FA4CE48CE42A04A4A4B220A0AD60D3E87120CF3BF92DFE26D71232A8505C4F3/thumbnail?cacheVersion=4&width=218&height=163&fit=bounds"></img>
    </Grid>
      
    );
  }
}

