import React from "react";
import { Box } from "@material-ui/core";

interface Props {
  imageName: string;
  width?: string;
  height?: string;
}

export class MapButtonIcon extends React.Component<any, Props> {
  render() {
    return (
      <Box>
        <img
          width={this.props.width ?? 25}
          height={this.props.height ?? 25}
          src={require(`./../../../assets/img/${this.props.imageName}`)}
        />
      </Box>
    );
  }
}
