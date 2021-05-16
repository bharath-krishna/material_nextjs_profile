import React, { Fragment } from "react";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 800,
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
  },
  // avatar_grid: {
  //   display: "flex",
  //   justifyContent: "center",
  //   paddingTop: 90,
  // },
  // avatar: {
  //   width: theme.spacing(25),
  //   height: theme.spacing(25),
  // },
  // name: {
  //   justifyContent: "center",
  //   display: "flex",
  //   // paddingTop: 240,
  //   // paddingBottom: 60,
  // },
}));

function Profile() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div style={{ paddingTop: 100, paddingBottom: 40 }}>
        <Avatar src="./bharath3.jpg" className={classes.avatar} />
      </div>
      <Typography variant="h4" display="block" className={classes.name}>
        Bharath Krishna
      </Typography>
      <Typography variant="subtitle1" className={classes.name}>
        Application Engineer
      </Typography>
    </div>
  );
}

export default Profile;
