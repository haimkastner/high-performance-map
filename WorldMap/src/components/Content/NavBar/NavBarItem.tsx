import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  children?: JSX.Element;
  width: number | string;
  height: number | string;
  name: string;
  value: number | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navItemInput: {
      backgroundColor: '#1D1D1D',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderStyle: 'solid',
      borderWidth: 1,
      boxSizing: 'border-box',
      color: '#FFFFFF',
      fontFamily: 'Assistant',
      opacity: 0.6,
      textAlign: 'center',
    },
    navItemName: {
      color: '#FFFFFF',
      fontFamily: 'Assistant',
      fontSize: 16,
      fontWeight: 600,
    },
  }),
);

export function NavBarItem(props: Props) {
  const classes = useStyles();

  const navItemStyle = {
    height: props.height,
    width: props.width,
  };

  return (
    <Grid container direction="row" justify="space-around" alignItems="center" style={navItemStyle}>
      <Typography id="name" className={classes.navItemName}>
        {props.name}
      </Typography>
      <Typography id="value" className={classes.navItemInput} style={navItemStyle}>
        {props.value.toString()}
      </Typography>
    </Grid>
  );
}
