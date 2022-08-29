/** @format */

import { makeStyles } from "@mui/styles";

export const pageLayoutStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		background: "var(--background)",
		height: "100vh",
		boxSizing: "border-box",
	},
	navabar_section: {
		flex: "0 1 auto",
	},
	page_section: {
		display: "flex",
		flexDirection: "row",
		maxWidth: "100vw",
		overflow: "hidden",
		height: "95%",
	},
	page_sidebar: {
		flex: ".1",
		background: "#DAEAF1",
	},
	page_viewarea: {
		flex: ".90",
		display: "flex",
		padding: ".8rem",
		overflow: "auto",
	},
});
