/** @format */

import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { navbarStyles } from "../../styles/navabar-styles/navbar.styles";
import Icons from "../../shared-components/Icons/Icons";

export default function Navbar() {
	const classes = navbarStyles();
	return (
		<div className={classes.navbar_container}>
			<div className={classes.navbar_left}>TradingRooms Controls</div>
			<div className={classes.logout_menu}>
				<Icons>
					<LogoutIcon />
				</Icons>
			</div>
		</div>
	);
}
