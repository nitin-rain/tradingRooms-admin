/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAPI, { callAPIParams } from "../../../hooks/useApi";
import UserRoomsView from "./UserRoomsView";

const UserCreatedRooms = () => {
	const { uid } = useParams();
	const userRooms = useAPI();

	useEffect(() => {
		const userRoomsBody: callAPIParams = {
			url: `https://admin.raintech.ai/users/${uid}/created-rooms`,
			method: "get",
		};
		userRooms?.callAPI(userRoomsBody);
	}, [uid]);

	console.log("userRooms---", userRooms?.data);

	if (userRooms?.loading) return <h2>Loading....</h2>;
	if (userRooms?.error) return <h2>Error</h2>;
	return <UserRoomsView roomsList={userRooms?.data} />;
};

export default UserCreatedRooms;
