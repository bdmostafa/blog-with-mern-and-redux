import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./images/mBlog-logo.jpg";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();

  const [currentId, setCurrentId]= useState(null)
  
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch(getPosts());
  },[currentId, dispatch])
  
  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {" "}
          mBlog{" "}
        </Typography>
        <img className={classes.image} src={logo} alt="mBlog" height="50" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainBodyContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
