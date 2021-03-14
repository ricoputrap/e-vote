import { Box, Grid } from "@material-ui/core";
import React from "react";
import ButtonPrimary from "../../usable-components/ButtonPrimary";
import Card from "../../usable-components/Card";
import useStyles from "./useStyles";

const Vote = () => {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card>
            <main className="candidates__main">
              <h2 className="candidates__no">1</h2>
              <img className="candidates__img" src="/images/sasaki-kotoniwa.png" alt="sasaki-kotoniwa" />
              <h3 className="candidates__name">Sasaki Kotoniwa</h3>
              <p className="candidates__tagline">"No excuse!"</p>
            </main>
            <ButtonPrimary 
              label="VOTE"
              handleClick={ e => console.log("VOTED!")}
            />
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <main className="candidates__main">
              <h2 className="candidates__no">2</h2>
              <img className="candidates__img" src="/images/nehru-jawalahru.png" alt="sasaki-kotoniwa" />
              <h3 className="candidates__name">Sasaki Kotoniwa</h3>
              <p className="candidates__tagline">"No excuse!"</p>
            </main>
            <ButtonPrimary 
              label="VOTE"
              handleClick={ e => console.log("VOTED!")}
            />
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <main className="candidates__main">
              <h2 className="candidates__no">3</h2>
              <img className="candidates__img" src="/images/alexander-breagule.png" alt="sasaki-kotoniwa" />
              <h3 className="candidates__name">Sasaki Kotoniwa</h3>
              <p className="candidates__tagline">"No excuse!"</p>
            </main>
            <ButtonPrimary 
              label="VOTE"
              handleClick={ e => console.log("VOTED!")}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Vote;