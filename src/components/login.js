import React, { Component } from 'react'
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function login() {
    
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
                        Login
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        autoFocus
                      />
                    </Grid>
                    <br />
                    <Grid
                      container
                      direction="row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <Link to="/sign-up">
                        <p>Create account</p>
                      </Link>
                      <Button
                        variant="contained"
                        color="primary"
                        // onClick={(e) => openLogin(e, "search")}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
 
}
