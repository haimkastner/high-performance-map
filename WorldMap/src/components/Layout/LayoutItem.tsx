import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

/**
 * All the props included in the LayoutItem, with some optional properties for future use.
 * These are the User-Input props, changeable what needed for the UI item.
 */
interface Props {
  children: JSX.Element[] | JSX.Element; //the Component children in the LayoutItem.
  opacity: number;
  color: string;
  width: string;
  height: string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // The external whole layout, will be in a fixed @position in the ui.
    // Will be in the above layer with the bigger zIndex.
    layout: {
      position: "fixed",
      zIndex: 1000
    },
    // The color of the new layout, will be placed BEHIND the layout's children.
    //The color is absolute under the components of the layer.
    color: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 999
    },
    // The child component in the layer, will be placed ABOVE it's Background-color box.
    item: {
      zIndex: 1000,
      position: "relative",
      width: "100%",
      height: "100%"
    }
  })
);

/**
 * A Wrapper Component for UI components, with many basic css properties.
 * @param props are the props of the wrapped UI item, some are optional.
 * @returns the item, with his css Wrapper as given in the @param props.
 */
export function LayoutItem(props: Props) {
  const classes = useStyles();

  const layoutStyle = {
    width: props.width,
    height: props.height,
    top: props.top ?? "",
    bottom: props.bottom ?? "",
    left: props.left ?? "",
    right: props.right ?? ""
  };

  const colorStyle = {
    backgroundColor: props.color,
    opacity: props.opacity
  };

  const itemStyle = {
    //for future custom design.
  };

  return (
    <Box className={classes.layout} style={layoutStyle}>
      {/** The complete new layer */}
      {/** The color of the layout background*/}
      <Box className={classes.color} style={colorStyle} />
      {/** The children components of the layer */}
      <Box className={classes.item} style={itemStyle}>
        {props.children}
      </Box>
    </Box>
  );
}
