import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    background: "#FFFFFF",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.14)",
    borderRadius: "10px",
  }
});

const Card = props => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      { props.children }
    </Box>
  )
}

export default Card;