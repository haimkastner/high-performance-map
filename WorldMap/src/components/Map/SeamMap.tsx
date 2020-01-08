import React from 'react';
import styles from './SeamMap.module.css';
import Box from '@material-ui/core/Box';
import PerformanceMap from "./PerformanceMap";

export class SeamMap extends React.Component {

    render() {
        return (<Box className={styles.SeamMap}>
            <PerformanceMap/>
        </Box>);
    }
}
