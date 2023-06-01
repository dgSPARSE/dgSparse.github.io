import { Link, makeStyles, Typography } from "@material-ui/core";
import {
  Button,
  Paper,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";

import React from "react";

import { grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";
import Frame from "./Frame";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "../img/dgsparse-logo.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
  },
  grid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    borderWidth: "0px",
    height: "100%",
    boxShadow: "1px 2px 2px 2px rgba(239, 239, 240, 1)",
    "&:hover": {
      boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
    },
  },
  cardArea: {
    height: "100%",
    padding: theme.spacing(3),
    textAlign: "center",
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
}));

export default function Ecosystem() {
  const classes = useStyles();
  const title = "Ecosystem";
  const subtitle =
    "dgSPARSE has been integrated into many libraries and softwares. Here are some popular examples using dgSPARSE.";
  const GithubBtn = ({ href }) => {
    return (
      <IconButton color="primary" size="large" href={href}>
        <GitHubIcon />
      </IconButton>
    );
  };

  const GridCards = () => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={9} sm={10} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardArea}>
              <Typography variant="h5" className={classes.text}>
                Card title
              </Typography>
              <Typography variant="body1" className={classes.text}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Typography>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9} sm={10} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardArea}>
              <Typography variant="h5" className={classes.text}>
                Card title
              </Typography>
              <Typography variant="body1" className={classes.text}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Typography>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9} sm={10} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardArea}>
              <Typography variant="h5" className={classes.text}>
                Card title
              </Typography>
              <Typography variant="body1" className={classes.text}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Typography>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Container className="my-auto">
        <GridCards />
      </Container>
      <Footer />
    </Grid>
  );
}
