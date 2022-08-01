/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { sidebarStyles } from "../../styles/sidebar-styles/sidebar.styles";

export default function Sidebar() {
  const classes = sidebarStyles();
  const sidearItems = ["Summary", "Users", "Rooms", "MIS"];
  return (
    <div className={classes.container}>
      {sidearItems?.map((item) => (
        <div className={classes.items}>
          <Link to={`/${item.toLowerCase()}`}>{item}</Link>
        </div>
      ))}
    </div>
  );
}
