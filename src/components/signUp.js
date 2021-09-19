import React, { Component } from "react";
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Paper style={{ padding: "2rem", width: "30rem" }}>
            <Grid
              item
              container
              spacing={2}
              direction="column"
              // alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h5"
                  component="h4"
                  style={{ textAlign: "center" }}
                >
                  Sign Up
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      name="first name"
                      placeholder="first name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      name="last name"
                      placeholder="last name"
                      autoFocus
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="email id"
                  type="email"
                  placeholder=" email id"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="phone no"
                  type="number"
                  placeholder=" phone no"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="password"
                  type="password"
                  placeholder=" create password"
                  autoFocus
                />
              </Grid>
              <br />
              <Grid
                container
                direction="row"
                style={{ justifyContent: "space-between" }}
              >
                {/* <Link to="/sign-up">
                  <p>Create account</p>
                </Link> */}

                <Button
                  variant="contained"
                  color="primary"
                  // onClick={(e) => openLogin(e, "search")}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
