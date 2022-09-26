/** @format */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDescription from "../components/userDetails/UserDescription";
import { UserModel } from "../models/user.model";
import { User } from "../sampleData/users";
import PageLayout from "./PageLayout";
import styled from "styled-components";
import UserNav from "../components/userDetails/UserNavigation";
import { DetailViewController } from "../components/userDetails/DetailViewController";

const UserDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex: 0.2;
	margin-right: 1rem;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex: 0.8;
`;

const UserDetails: React.FC = () => {
	let { uid } = useParams();
	const [userData, setUserData] = useState<UserModel>(User);
	const [activeNav, setActiveNav] = useState<string>("User Profile");

	const handleActiveNavChange = (navItem: string) => {
		setActiveNav((prev) => navItem);
	};

	useEffect(() => {
		setUserData({ ...User });
	}, [uid]);

	return (
		<PageLayout>
			<UserDetailsContainer>
				<LeftContainer>
					<UserDescription
						uid={userData.uid}
						avatar={userData.avatar}
						name={userData.producername}
					/>
					<UserNav
						handleActiveNavChange={handleActiveNavChange}
						activeNav={activeNav}
					/>
				</LeftContainer>
				<RightContainer>
					<DetailViewController activeNav={activeNav} />
				</RightContainer>
			</UserDetailsContainer>
		</PageLayout>
	);
};

export default UserDetails;
