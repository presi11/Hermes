import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 25,
    width: 10,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const GridHOC = ({ children }) => {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>

            {children}


          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridHOC;
