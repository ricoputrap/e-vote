import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#fff",
    backgroundColor: "#5A68E5",
    width: "100%",
  }
});

const ButtonPrimary = ({ label, handleClick }) => {
  const classes = useStyles();
  return (
    <Button 
      variant="contained" 
      onClick={e => handleClick(e)}
      className={classes.root}
    >
      { label }
    </Button>
  )
}

export default ButtonPrimary;