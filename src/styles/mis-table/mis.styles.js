/** @format */

import { makeStyles } from "@mui/styles";

export const misTableStyles = makeStyles({
	container: {
		marginTop: ".5rem",
		// height: "100%",
	},
	tableContainer: {
		maxWidth: "100% !important",
		height: "100%",
		overflow: "auto",
	},
	table: {
		minWidth: "100%",
		width: "max-content !important",
		fontSize: "1rem",
		fontWeight: "400",
		position: "relative",
		overflowX: "auto",

		"& thead": {
			backgroundColor: "lightblue",
			position: "sticky",
			top: "0",
			zIndex: "9999",
		},
		"& td, th": {
			padding: "0.3em 0.5em",
			border: "1px solid black",
		},
		"& td": {
			backgroundColor: "rgb(255, 255, 185)",
			"&:first-child": {
				backgroundColor: "yellowgreen",
				position: "sticky",
				left: "0",
				zIndex: "99999",
			},
		},
	},
});
