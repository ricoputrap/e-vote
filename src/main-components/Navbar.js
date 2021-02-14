import { AppBar, Box, Button, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      color: "#191F52",
      "&:hover": {
        textDecoration: "none",
      }
    }
  }
});

const Navbar = () => {
  const classes = useStyles();
  const preventDefault = e => e.preventDefault();

  return (
    <Box p={2} className={ classes.root }>
      
      <Link href="/" onClick={ preventDefault }>
        <Typography variant="h4">e-vote</Typography>
      </Link>
      <Box component="span">
        <Button>
          <Link href="/vote" onClick={ preventDefault }>
            Vote
          </Link>
        </Button>
        <Button>
          <Link href="/candidates" onClick={ preventDefault }>
            Candidates
          </Link>
        </Button>
        <Button>
          <Link href="/result" onClick={ preventDefault }>
            Result
          </Link>
        </Button>
      </Box>
    </Box>

  )
}

export default Navbar;