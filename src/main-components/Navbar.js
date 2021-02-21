import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      color: "#191F52",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      }
    }
  }
});

const Navbar = ({ Home, Vote, Candidates, Result}) => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Box p={2} className={ classes.root }>
          <Link to="/home">
            <Typography variant="h4">e-vote</Typography>
          </Link>
          <Box component="span">
            <Button>
              <Link to="/vote">
                Vote
              </Link>
            </Button>
            <Button>
              <Link to="/candidates">
                Candidates
              </Link>
            </Button>
            <Button>
              <Link to="/result">
                Result
              </Link>
            </Button>
          </Box>
        </Box>

        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/vote"><Vote /></Route>
          <Route path="/candidates"><Candidates /></Route>
          <Route path="/result"><Result /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default Navbar;