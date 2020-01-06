import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DownBar, MapButtons, UpBar, SideMenu, NavBar } from "./LayoutItems";
import Box from "@material-ui/core/Box";
import { LayoutItem } from "./LayoutItem";

/**
 * to customize design for ui components in the future.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bars: {
      //for future custom design 
    }
  })
);

/**
 * The bars layout, 
 * The bars are returned with their unique css design by using @LayoutItem .
 * @returns all the bars above our map. 
 */
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
      <LayoutItem
        opacity={0.5}
        color={"#016976"}
        height={"419px"}
        width={"60px"}
        left={0}
        top={"calc(50vh - 210px)"}
      >
        <MapButtons />
      </LayoutItem>
      <LayoutItem
        opacity={0.5}
        // color={"transparent"}
        color={"#016976"}
        height={"419px"}
        width={"60px"}
        right={0}
        top={"calc(50vh - 210px)"}
      >
      <MapButtons />
      </LayoutItem>
      <LayoutItem
        opacity={0.5}
        color={"black"}
        height={"120px"}
        width={"1000px"}
        right={"calc(50vw - 500px)"}
        top={90}
      >
        <NavBar />
      </LayoutItem>
      <LayoutItem
        opacity={0.5}
        color={"#016976"}
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
