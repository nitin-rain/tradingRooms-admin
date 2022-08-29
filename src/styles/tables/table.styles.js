/** @format */

import { makeStyles } from "@mui/styles";

export const tableStyles = makeStyles({
	tableContainer: {
		width: "100%",
		// height: "90%",
		overflow: "auto",
		background: "var(--paper)",
		borderRadius: "10px",
		padding: ".5rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	table: {
		minWidth: "100%",
		borderCollapse: "collapse",
		width: "max-content !important",
		fontSize: "1rem",
		fontWeight: "400",
		position: "relative",
		overflowX: "auto",
		height: "92%",

		"& thead tr": {
			textAlign: "left",
		},

		"& th": {
			padding: ".5rem",
			marginBottom: "1px solid red",
			color: "#4D5E80",
		},

		"& td": {
			padding: ".5rem",
		},

		"& tbody tr": {
			borderBottom: "1px solid #F0F0F0",
			padding: "1rem 0",
			"&:first-child": {
				borderTop: "2px solid #F0F0F0",
			},
		},
	},
	paginationArea: {
		borderTop: "2px solid #F0F0F0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: "7%",
		alignItems: "center",
	},
});
