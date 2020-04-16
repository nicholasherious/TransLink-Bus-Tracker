import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function Example() {
  return (
    <Grid container spacing={4} alignContent="center">
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom align="center">
          Example: type "60980" and hit search.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Example;
