import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

function Error() {
  return (
    <div>
      <Alert severity="info">
        <AlertTitle>Information</AlertTitle>
        No buses are scheduled for this stop — Please try again later.
      </Alert>
    </div>
  );
}

export default Error;
