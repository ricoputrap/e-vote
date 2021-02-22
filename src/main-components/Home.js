import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import PieChartIcon from '@material-ui/icons/PieChart';
import PeopleIcon from '@material-ui/icons/People';
import Card from "../usable-components/Card";

const useStyles = makeStyles({
  root: {
    padding: "10rem 5rem",
    "& .MuiGrid-item": {
      display: "flex",
    },
    "& .MuiBox-root": {
      textAlign: "center",
      padding: "2rem 3rem",
      "&:hover": {
        cursor: "pointer",
        background: "#F0F0F0"
      },
      "& .MuiTypography-root": {
        fontWeight: "bold",
      },
      "& .MuiSvgIcon-root": {
        height: "5rem",
        width: "5rem",
        color: "#5A68E5"
      }
    }
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={4} style={{ justifyContent: "flex-end" }}>
          <Card>
            <HowToVoteIcon />
            <Typography>Vote</Typography>
          </Card>
        </Grid>
        <Grid item sm={4} style={{ justifyContent: "center" }}>
          <Card>
            <PeopleIcon />
            <Typography>Candidates</Typography>
          </Card>
        </Grid>
        <Grid item sm={4} style={{ justifyContent: "flex-start" }}>
          <Card>
            <PieChartIcon />
            <Typography>Result</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home;