import React from 'react';
import styles from './SeamMap.module.css';
import Box from '@material-ui/core/Box';
import PeformanceMap from "./PeformanceMap";

export class SeamMap extends React.Component {

    render() {
        return (<Box className={styles.SeamMap}>
            <PeformanceMap/>
        </Box>);
    }
}
