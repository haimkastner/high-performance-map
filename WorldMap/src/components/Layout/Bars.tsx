import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DownBar, MapButtons, UpBar, SideMenu, NavBar } from "./";
import Box from "@material-ui/core/Box";
import { LayoutItem } from "./Items/LayoutItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bars: {
      // width: "100%",
      // height: "100%",
      // width: "100vw",
      // height: "100vh",
      // position: "fixed",
      // backgroundColor: "black"
      // position: "fixed",
      // top: 0,
      // left: 0,
      // bottom: 0,
      // right: 0,
      // overflow: "auto",
      // backgroundColor: "lime"
    }
  })
);

export function Bars() {
  const classes = useStyles();

  return (
    <Box className={classes.bars}>
      <LayoutItem
        opacity={0.5}
        color={"#016976"}
        height={"41px"}
        top={0}
        width={"100vw"}
        left={0}
      >
        <UpBar />
      </LayoutItem>
      {/* <LayoutItem opacity={0.5} color={"purple"}>
        <MapButtons />
      </LayoutItem>
      <LayoutItem opacity={0.5} color={"darkorange"}>
        <SideMenu />
      </LayoutItem>
      <LayoutItem opacity={0.5} color={"brown"}>
        <NavBar />
      </LayoutItem>
      <LayoutItem opacity={0.5} color={"green"}>
        <DownBar />
      </LayoutItem> */}
      <LayoutItem
        opacity={0.5}
        color={"green"}
        height={"41"}
        bottom={0}
        width={"100vw"}
        left={0}
      >
        <DownBar />
      </LayoutItem>
    </Box>
  );
}
