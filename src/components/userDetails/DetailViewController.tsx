/** @format */

import React from "react";
import UserBrokers from "./UserBrokers";
import UserCreatedRooms from "./UserCreatedRooms/UserCreatedRooms";
import UserProfile from "./UserProfile";
import UserRoomMemberships from "./UserRoomMemberships";
import UserWallet from "./UserWallet";

interface ControllerProps {
	activeNav: string;
}
export const DetailViewController = ({ activeNav }: ControllerProps) => {
	switch (activeNav) {
		case "User Profile":
			return <UserProfile />;

		case "Broker":
			return <UserBrokers />;

		case "Wallet":
			return <UserWallet />;

		case "Created Rooms":
			return <UserCreatedRooms />;

		case "Room Membership":
			return <UserRoomMemberships />;

		default:
			return <UserProfile />;
	}
};
