import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "30px",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;

// .card {
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   font-size: 30px;
// }

// .container {
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;
//   justify-content: center;
// }
