import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BusPhoto from '../assets/bus.png'

function Example() {
  return (
    <Grid container spacing={4} alignContent="center">
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom align="center">
          Example: type "60980" and hit search.
        </Typography>
        
      </Grid>
      <Grid item xs={12} align="center">
      <img src={BusPhoto} alt="Transportation" />
      </Grid>
    </Grid>
  );
}

export default Example;
