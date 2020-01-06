import React from "react";
import { MapButtonIcon } from "./MapButtonIcon";
import { Box, Button } from "@material-ui/core";
import { setSharedState, subsribeState, unsubsribeState } from "../../../services/stats-store";

interface State {
  speed: string;
}

export class EditButton extends React.Component<any, State> {
  token: any;

  state: State = {
    speed: "111"
  };

  publish() {
    setSharedState("speed", 99);
    setSharedState("direction", 100);
  }

  componentDidMount() {
    this.token = subsribeState("speed", this);
  }
  componentWillUnmount() {
    unsubsribeState(this.token);
  }

  render() {
    return (
      <Box>
        <Button onClick={this.publish}>
          {this.state.speed}
          <MapButtonIcon
            imageName={"display-copy-shape-2@2x.png"}
          ></MapButtonIcon>
        </Button>
      </Box>
    );
  }
}
