import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import {
  subscribeState,
  unsubscribeState,
  subscribeHookState,
  
} from "../../../services/stats-store";
interface State {
  speed: string;
}

export function Direction() {
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);

  let directionToken: any;
  let speedToken: any;
  useEffect(() => {
    console.log("mount");
    directionToken = subscribeHookState("direction", setDirection);
    speedToken = subscribeHookState("speed", setSpeed);
  }, []);

  useEffect(
    () => () => {
      console.log("unmounted");

      unsubscribeState(directionToken);
      unsubscribeState(speedToken);
    },
    []
  );

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        function {direction} {speed}
      </Typography>
    </Box>
  );
}
