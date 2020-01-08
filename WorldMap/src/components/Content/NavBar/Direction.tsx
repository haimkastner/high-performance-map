import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import {
  subscribeState,
  unsubscribeState,
  subscribeHookState
} from "../../../services/stats-store";
import { Platform } from "../../../models/models";
interface State {
  speed: string;
}

export function Direction() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>();

  let selectedPlatformToken: any;
  useEffect(() => {
    selectedPlatformToken = subscribeHookState(
      "selectedPlatform",
      setSelectedPlatform
    );
  }, []);

  useEffect(
    () => () => {
      unsubscribeState(selectedPlatformToken);
    },
    []
  );

  return (
    <Box>
      
    </Box>
  );
}
