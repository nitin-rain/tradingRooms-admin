/** @format */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDescription from "../components/userDetails/UserDescription";
import { UserModel } from "../models/user.model";
import { User } from "../sampleData/users";
import PageLayout from "./PageLayout";
import styled from "styled-components";

const UserDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 0.2;
	/* border: 1px solid red; */
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex: 0.8;

	/* border: 1px solid blue; */
`;

const UserDetails: React.FC = () => {
	let { uid } = useParams();
	const [userData, setUserData] = useState<UserModel>(User);

	useEffect(() => {
		setUserData({ ...User });
	}, [uid]);

	return (
		<PageLayout>
			<UserDetailsContainer>
				<LeftContainer>
					{/* user desc */}

					<UserDescription
						uid={userData.uid}
						avatar={userData.avatar}
						name={userData.producername}
					/>
					{/* user nav */}
				</LeftContainer>

				<RightContainer></RightContainer>
				{/* user detils */}
			</UserDetailsContainer>
		</PageLayout>
	);
};

export default UserDetails;
