import React from "react";
import Contact from "../components/Contact";
import WorkHistory from "../components/WorkHistory";
import HeadPlate from "../components/HeadPlate";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import SkillSet from "../components/SkillSet";
import {
  Container,
  Fab,
  makeStyles,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Parallax } from "react-parallax";
import CustomAppBar from "../components/CustomAppBar";
import AboutMe from "../components/AboutMe";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#Top"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function MainBody(props) {
  const classes = useStyles();
  return (
    <div>
      <HeadPlate />
      <Parallax bgImage="./bg1.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Profile />
          {/* <AboutMe />
        <SkillSet />
        <Projects />
        <WorkHistory />
        <Contact /> */}
        </div>
      </Parallax>
      <Parallax bgImage="./bg2.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Container style={{ color: "white" }}>
            <AboutMe />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./bg9.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Container style={{ color: "white" }}>
            <WorkHistory />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./bg7.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Container style={{ color: "white" }}>
            <SkillSet />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./bg3.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Container style={{ color: "black" }}>
            <Projects />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./bg6.jpg" strength={250}>
        <div style={{ height: 850 }}>
          <Container style={{ color: "black" }}>
            <Contact />
          </Container>
        </div>
      </Parallax>

      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <ExpandLessIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default MainBody;
