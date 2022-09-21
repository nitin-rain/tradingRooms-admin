/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import MSI from "../containers/MSI";
import UserDetails from "../containers/UserDetails";
// import UserDetails from "../containers/UserDetails";

import UsersList from "../containers/UsersList";

export default function RoutesComp() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/users" exact element={<UsersList />} />
			<Route path="/users/:uid" exact element={<UserDetails />} />
			<Route path="/mis" element={<MSI />} />
		</Routes>
	);
}
