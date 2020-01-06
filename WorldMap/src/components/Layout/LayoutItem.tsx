import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

/**
 * All the props included in the LayoutItem, with some optional properties for future use.
 */
interface Props {
  children: JSX.Element[] | JSX.Element;
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
    layout: {
      position: "fixed",
      zIndex: 1000
    },
    color: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 999,
      backgroundColor: "ffjhdifuhdsfu"
    },
    item: {
      zIndex: 1000,
      position: "relative"
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
    width: "100%",
    height: "100%"
  };

  return (
    <Box className={classes.layout} style={layoutStyle}>
      <Box className={classes.item} style={itemStyle}>
        {" "}
        {props.children}
      </Box>
      <Box className={classes.color} style={colorStyle} />
    </Box>
  );
}
