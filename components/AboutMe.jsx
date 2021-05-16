import { Box, Grid, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    height: 800,
    paddingTop: 100,
  },
  title: {
    // fontSize: 20,
    // fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    color: "black",
  },
  aboutme: {
    display: "flex",
    // paddingInline: 400,
    // maxWidth: 500,
    // justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "black",
  },
}));

function AboutMe() {
  const classes = useStyle();
  return (
    <div id="AboutMe" className={classes.root}>
      {/* <Toolbar style={{ minHeight: 100 }} /> */}
      <Box>
        <Typography className={classes.title} variant="h5">
          AboutMe
        </Typography>
        <Typography variant="subtitle1" className={classes.aboutme}>
          Application engineeer with 8+ years of experience in building backend
          services using python and building all in one frameworks. Building
          microservice orchestration in kubernetes. UI development using React.
        </Typography>
      </Box>
    </div>
  );
}

export default AboutMe;
