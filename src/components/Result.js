import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function Result({ bus }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={
              <div className={classes.root}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.purple}>{bus.RouteNo}</Avatar>
                </StyledBadge>
              </div>
            }
            title={bus.RouteName}
          />

          <CardContent>
          <Grid container direction="column" spacing={0}>
              <Grid item container spacing={2}>

      <Grid item xs={6}>
      <Typography variant="h5" component="h2">
              Next Bus: {bus.Schedules[0].ExpectedLeaveTime.split(' ', 1)}
            </Typography>
      </Grid>
      <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              Destination: {bus.Schedules[0].Destination}
            </Typography>
            </Grid>
              </Grid>
            <Typography variant="subtitle1" component="h5">
              Direction: {bus.Direction}
            </Typography>
      </Grid>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ScheduleIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Scheduled Times:</Typography>

                <Box
                  display="flex"
                  flexWrap="wrap"
                  p={1}
                  m={1}
                  css={{ maxWidth: 500 }}
                >
                  {bus.Schedules.map((time, index) => (
                    <Box key={index} p={1}>
                      {time.ExpectedLeaveTime.split(' ', 1)}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Result;
