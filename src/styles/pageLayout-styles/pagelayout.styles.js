/** @format */

import { makeStyles } from "@mui/styles";

export const pageLayoutStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",

    height: "100vh",
    boxSizing: "border-box",
  },
  navabar_section: {
    flex: "0 1 auto",
  },
  page_section: {
    display: "grid",
    maxWidth: "100vw",
    gridTemplateColumns: "83px calc(100vw - 83px)",
    overflow: "hidden",
  },
  page_sidebar: {
    flex: ".15",
    // padding: ".8rem",
    background: "#DAEAF1",
  },
  page_viewarea: {
    flex: ".85",

    padding: ".8rem",
  },
});
