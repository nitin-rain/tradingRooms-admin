/** @format */

import React, { useEffect } from "react";
import UserListTable from "../components/table/UserList.table";
import useAPI from "../hooks/useApi";
import PageLayout from "./PageLayout";

const UsersReqBody = {
	url: "https://admin.raintech.ai/users",
	method: "get",
};

export default function UsersList() {
	const columns = ["User ID", "Name", "Email", "Phone No"];

	const usersList = useAPI();

	useEffect(() => {
		usersList?.callAPI(UsersReqBody);
	}, []);

	console.log("userList---", usersList?.data);

	if (usersList?.loading) return <h2>Loading...</h2>;
	if (usersList?.error) return <h2>Error</h2>;

	if (usersList?.data) {
		return (
			<PageLayout>
				<UserListTable columns={columns} data={usersList?.data} />
			</PageLayout>
		);
	}
}
