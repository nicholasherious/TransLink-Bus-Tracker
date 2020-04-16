import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

function Error() {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        That route does not exist or isn't scheduled — Please try again
        with another 5 digit TransLink stop number.
      </Alert>
    </div>
  );
}

export default Error;
