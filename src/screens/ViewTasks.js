import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function ViewTasks() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid marginTop={8} container>
          <Grid item xs={12} sm={6} border={1}>
            s
          </Grid>
          <Grid item xs={12} sm={6} border={1}>
            s
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
