/** @format */
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { pageLayoutStyles } from "../styles/pageLayout-styles/pagelayout.styles";

interface Props {
	children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
	const classes = pageLayoutStyles();
	return (
		<div className={classes.container}>
			<div className={classes.navabar_section}>
				<Navbar />
			</div>
			<div className={classes.page_section}>
				<div className={classes.page_sidebar}>
					<Sidebar />
				</div>
				<div className={classes.page_viewarea}>{children}</div>
			</div>
		</div>
	);
}
