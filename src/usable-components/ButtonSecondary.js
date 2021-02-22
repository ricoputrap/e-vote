import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginLeft: "1rem",
    color: "#191F52",
    border: "2px solid #5A68E6"
  }
});

const ButtonSecondary = ({ label, handleClick }) => {
  const classes = useStyles();
  return (
    <Button 
      variant="outlined" 
      onClick={e => handleClick(e)}
      className={classes.root}
    >
      { label }
    </Button>
  )
}

export default ButtonSecondary;