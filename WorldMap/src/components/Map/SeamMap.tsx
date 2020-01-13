import Box from '@material-ui/core/Box';
import React from 'react';
import PerformanceMap from './PerformanceMap';
import styles from './SeamMap.module.css';

export class SeamMap extends React.Component {
  public render() {
    return (
      <Box className={styles.SeamMap}>
        <PerformanceMap />
      </Box>
    );
  }
}
