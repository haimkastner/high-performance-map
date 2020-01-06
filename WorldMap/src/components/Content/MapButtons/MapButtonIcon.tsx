import React from "react";
import { Box } from "@material-ui/core";

/**
 * the properties for an Icon in one of the map buttons. 
 */
interface Props {
  imageName: string;
  width?: string;
  height?: string;
}

/**
 * Gets the @param props to put on the button's image.
 * @returns the image with the updated css properties.
 */
export class MapButtonIcon extends React.Component<any, Props> {
  render() {
    return (
      <Box>
        <img
          width={this.props.width ?? 25} //if not given, default is 25
          height={this.props.height ?? 25} //if not given, default is 25
          src={require(`./../../../assets/img/${this.props.imageName}`)} //the complete path with the name
        />
      </Box>
    );
  }
}
