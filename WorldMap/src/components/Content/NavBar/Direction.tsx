import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import {
  subsribeState,
  unsubsribeState,
  subscribeHookState
} from "../../../services/stats-store";
interface State {
  speed: string;
}

export function Direction() {
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);

  let token: any;
  useEffect(() => {
    token = subscribeHookState("direction", setDirection);
    token = subscribeHookState("speed", setSpeed);
  }, []);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        function {direction} {speed}
      </Typography>
    </Box>
  );
}
