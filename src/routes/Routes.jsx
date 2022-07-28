/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

export default function RoutesComp() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
	);
}
