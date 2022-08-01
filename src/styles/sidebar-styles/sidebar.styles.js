/** @format */

import { makeStyles } from "@mui/styles";

export const sidebarStyles = makeStyles({
  container: {
    marginTop: ".5rem",
  },
  items: {
    padding: ".5rem",
    cursor: "pointer",
    "&:hover": {
      background: "#C6DCE4",
    },
    "& a": {
      textDecoration: "none",
      color: "currentcolor",
    },
  },
});
