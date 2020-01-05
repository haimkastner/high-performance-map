import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

interface Props {
  children: JSX.Element[] | JSX.Element;
  opacity: number;
  color: string;
  width: string;
  height: string;
  top?: number;
  bottom?: number;
  left: number;
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
      zIndex: 999
    },
    item: {
      zIndex: 1000,
      position: "relative"
    }
  })
);

export function LayoutItem(props: Props) {
  const classes = useStyles();

  const layoutStyle = {
    width: props.width,
    height: props.height,
    top: props.top ?? "",
    bottom: props.bottom ?? "",
    left: props.left
  };

  const colorStyle = {
    backgroundColor: props.color,
    opacity: props.opacity
  };

  return (
    <Box className={classes.layout} style={layoutStyle}>
      <Box className={classes.item}>{props.children}</Box>
      <Box className={classes.color} style={colorStyle} />
    </Box>
  );
}
