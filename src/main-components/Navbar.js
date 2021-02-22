import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonSecondary from "../usable-components/ButtonSecondary";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "1rem 5rem",
    "& .MuiButton-text": {
      marginLeft: "1rem",
    },
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
          <Link to="/">
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
            <ButtonSecondary 
              label="Logout"
              handleClick={ e => console.log(e)}
            />
          </Box>
        </Box>

        <Switch>
          
          <Route path="/vote"><Vote /></Route>
          <Route path="/candidates"><Candidates /></Route>
          <Route path="/result"><Result /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default Navbar;