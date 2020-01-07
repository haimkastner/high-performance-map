import React from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { subscribeState, unsubscribeState, setSharedState } from "../../../services/stats-store";
interface State {
  speed: string;
}

export class Speed extends React.Component<any, State> {
  token: any;

  state: State = {
    speed: "0"
  };

  componentDidMount() {
    this.token = subscribeState("speed", this);

    setTimeout(() =>{
        setSharedState('speed', 457286278);
    }, 5000);
  }
  componentWillUnmount() {
    unsubscribeState(this.token);
  }
  render() {
    return (
      <Box>
        <Typography variant="h2" gutterBottom>
          class {this.state.speed}
        </Typography>
      </Box>
    );
  }
}
