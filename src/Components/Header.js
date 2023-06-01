import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import React from "react";
import Image from "../img/sparse_graph_1.jpg";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "61.8vh",
    display: "block",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    opacity: 0.25,
    left: "0",
    top: "0",
    width: "inherit",
    height: "inherit",
    objectFit: "cover",
  },

  content: {
    position: "absolute",
    textAlign: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    fontFamily: "Libre Baskerville, serif",
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function Header() {
  const classes = useStyles();

  const Title = () => {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.title}
          variant="h1"
          paragraph={true}
          gutterBottom={true}
        >
          dgSPARSE
        </Typography>
      </ThemeProvider>
    );
  };

  const SubTitle = () => {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.subtitle}
          variant="h5"
          paragraph={true}
          gutterBottom={true}
        >
          Easy and Fast Sparse Graph Processing
        </Typography>
      </ThemeProvider>
    );
  };

  const BtnInstall = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GetAppIcon />}
        href="/installation"
      >
        Install
      </Button>
    );
  };

  const BtnGithub = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GitHubIcon />}
        href="https://github.com/dgSPARSE"
      >
        Github
      </Button>
    );
  };

  const BackgroundImage = () => (
    <img className={classes.img} src={Image} alt="background" />
  );

  return (
    <Grid>
      <Paper className={classes.root} elevation={0}>
        <BackgroundImage />
        <div className={classes.content} elevation={5}>
          <Title />
          <SubTitle />
          <div>
            <BtnInstall />
            <BtnGithub />
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
