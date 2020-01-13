import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Bars } from './Layout/Bars';
import { SeamMap } from './Map/SeamMap';

/**
 * @returns the whole UI we have, including all layers.
 */
export default function Dashboard() {
  return (
    <Box>
      <Bars />
      <SeamMap />
    </Box>
  );
}
