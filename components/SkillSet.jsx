import {
  Container,
  Grid,
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
    color: "black",
  },
}));

function SkillSet() {
  const classes = useStyle();
  return (
    <div id="SkillSet" style={{ paddingInline: 400 }} className={classes.root}>
      {/* <Toolbar style={{ minHeight: 100 }} /> */}
      <Typography align="center" variant="h5">
        Skill Set
      </Typography>
      <Typography variant="h6" align="center">
        Python
      </Typography>
      <Typography variant="subtitle1" align="center">
        8+ years of experience of building applications using python and its
        frameworks like django, aiohttp, fastapi. In dept knowledge of standard
        and third party libraries of database, http clients etc.
      </Typography>
      <Typography variant="h6" align="center">
        Kubernetes
      </Typography>
      <Typography variant="subtitle1" align="center">
        Certified kubernetes administrator and application developer. Good at
        building microservice orchestration and service mesh.
      </Typography>
      <Typography variant="h6" align="center">
        Go lang
      </Typography>
      <Typography variant="subtitle1" align="center">
        Good at building services using go lang and its frameworks like GoChi,
        GoGin.
      </Typography>
      <Typography variant="h6" align="center">
        Ansible
      </Typography>
      <Typography variant="subtitle1" align="center">
        Proficient in making cluster deployment scripts and playbooks using
        ansible. Good at ansible tower and ansible AWX.
      </Typography>
    </div>
  );
}

export default SkillSet;
