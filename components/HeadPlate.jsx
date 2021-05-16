import {
  AppBar,
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomLink from "../src/CustomLink";
import Link from "next/link";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#c1f4fc",
  },
  appbar: {
    display: "flex",
    // flexGrow: 1,
    backgroundColor: "#e0e0e0",

    // flexDirection: "row",
    // justifyContent: "center",
  },
  toolbar: { display: "flex", minHeight: 100, color: "transparent" },
  toolbar_items: {
    // marginRight: theme.spacing(2),
    flexGrow: 1,
    color: "black",
    // fontSize: "15px",
    // flexGrow: 1,
  },
}));

function HeadPlate() {
  const classes = useStyle();
  return (
    <div id="Top" className={classes.root}>
      {/* <AppBar className={classes.appbar} color="transparent"> */}
      <Toolbar className={classes.toolbar}>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#Top"
          className={classes.toolbar_items}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#AboutMe"
          className={classes.toolbar_items}
        >
          AboutMe
        </Button>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#SkillSet"
          className={classes.toolbar_items}
        >
          Skill Sets
        </Button>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#Projects"
          className={classes.toolbar_items}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#WorkHistory"
          className={classes.toolbar_items}
        >
          Work History
        </Button>
        <Button
          color="inherit"
          component={CustomLink}
          href="/#Contact"
          className={classes.toolbar_items}
        >
          Contact
        </Button>
      </Toolbar>
      {/* </AppBar>
      <Toolbar className={classes.toolbar} /> */}
    </div>
  );
}

export default HeadPlate;
