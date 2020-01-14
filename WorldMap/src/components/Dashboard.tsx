import Box from '@material-ui/core/Box';
import React, { Suspense } from 'react';
import { Bars } from './Layout/Bars';
const LazySeamMap = React.lazy(() => import('./Map/SeamMap'));
/**
 * @returns the whole UI we have, including all layers.
 */
export default function Dashboard() {
  return (
    <Box>
      <Bars />
      <Suspense fallback={<div>Loading...</div>}>
        <LazySeamMap />
      </Suspense>
    </Box>
  );
}
