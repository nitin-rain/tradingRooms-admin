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
		display: "flex",
		flexDirection: "row",
		flex: "1 1 auto",
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
