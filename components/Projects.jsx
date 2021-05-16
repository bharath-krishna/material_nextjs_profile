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

function Projects() {
  const classes = useStyle();
  return (
    <div id="Projects" className={classes.root}>
      {/* <Toolbar style={{ minHeight: 100 }} /> */}
      <Typography align="center" variant="h5">
        Projects
      </Typography>

      <Typography variant="h6" align="center">
        Backend api development
      </Typography>
      <Typography variant="subtitle1" align="center">
        Building backend service for baremetal server as a service. Building
      </Typography>
      <Typography variant="h6" align="center">
        Base microsystem development
      </Typography>
      <Typography variant="subtitle1" align="center">
        organization compatable base microservice framework using fastapi for
        easy development and deployment.
      </Typography>
      <Typography variant="h6" align="center">
        Test framework development
      </Typography>
      <Typography variant="subtitle1" align="center">
        building framework for doing integration testing, unit testing, and end
        to end testing.
      </Typography>
      <Typography variant="h6" align="center">
        Building identity and authorization system
      </Typography>
      <Typography variant="subtitle1" align="center">
        Building authentication system using keycloak and a golang service for
        handling admin activities from kubernetes apis.
      </Typography>
    </div>
  );
}

export default Projects;
