/** @format */

import React from "react";
import { sidebarStyles } from "../../styles/sidebar-styles/sidebar.styles";

export default function Sidebar() {
	const classes = sidebarStyles();
	const sidearItems = ["Summary", "Users", "Rooms", "MIS"];
	return (
		<div className={classes.container}>
			{sidearItems?.map((item) => (
				<div className={classes.items}>{item}</div>
			))}
		</div>
	);
}
