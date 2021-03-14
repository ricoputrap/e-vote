import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "8rem 5rem",
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiBox-root": {
      textAlign: "center",
      padding: "1.5rem 1rem",
      "& .candidates__main": {
        padding: "1rem 2rem",
      },
      "& .candidates__img": {
        margin: "1rem 0",
      },
      "& .candidates__name": {
        textTransform: "uppercase",
      },
      "& .candidates__tagline": {
        color: "#AEB0C3",
        marginTop: "0.5rem",
      },
    }
  }
});

export default useStyles;