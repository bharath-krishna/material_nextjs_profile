import {
  Container,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    height: 800,
    paddingTop: 100,
  },
}));

function Contact() {
  const classes = useStyle();
  return (
    <div id="Contact" className={classes.root}>
      {/* <Toolbar style={{ minHeight: 100 }} /> */}
      <Typography variant="h5">Contacts</Typography>
      <Typography variant="subtitle1" align="left">
        bharath.chakravarthi@gmail.com
      </Typography>
    </div>
  );
}

export default Contact;
