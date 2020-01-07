import React from "react";
import { MapButtonIcon } from "./MapButtonIcon";
import { Box, Button } from "@material-ui/core";
import {
  setSharedState,
  subscribeState,
  unsubscribeState
} from "../../../services/stats-store";

interface State {
  speed: string;
  showMapButtonsMenu: boolean;
}

export class EditButton extends React.Component<any, State> {
  token: any;

  state: State = {
    speed: "111",
    showMapButtonsMenu: false
  };

  publish = () => {
    setSharedState("mapButtonsMenuTop", "calc(50vh - 60px)");
    setSharedState(
      "showMapButtonsMenu",
      this.state.showMapButtonsMenu ? false : true
    );
    setSharedState("direction", 100);
  }

  componentDidMount() {
    this.token = subscribeState("speed", this);
    this.token = subscribeState("showMapButtonsMenu", this);
  }
  componentWillUnmount() {
    unsubscribeState(this.token);
  }

  render() {
    return (
      <Box>
        <Button onClick={this.publish}>
          <MapButtonIcon
            imageName={"display-copy-shape-2@2x.png"}
          ></MapButtonIcon>
        </Button>
      </Box>
    );
  }
}
