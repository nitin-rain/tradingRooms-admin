/** @format */

import { makeStyles } from "@mui/styles";

export const navbarStyles = makeStyles({
	navbar_container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		background: "var(--primary-blue)",
		width: "100vw",
		height: "50px",
		color: "var(--primary-text)",
		margin: "0",
		padding: "0 .8rem",
		boxSizing: "border-box",
	},
	navbar_left: {
		fontSize: "1.5rem",
		fontWeight: "600",
	},
});
