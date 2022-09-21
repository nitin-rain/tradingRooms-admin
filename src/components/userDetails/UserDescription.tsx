/** @format */
import React from "react";
import styled from "styled-components";

interface userDescriptionProps {
	uid: string;
	avatar: string | null;
	name: string;
}

const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--border);

	background: var(--paper);
	border-radius: 10px;
	padding: 1rem;
`;

const Avatar = styled.img`
	height: 80px;
	width: 80px;
	border-radius: 100px;
	margin-bottom: 1rem;
`;

const NameContainer = styled.div`
	font-weight: 600;
	color: #4d5e80;
	font-size: 16px;
	margin-bottom: 1rem;
`;
const UIDContainer = styled.div`
	color: #4d5e80;
	font-size: 12px;
`;

const UserDescription: React.FC<userDescriptionProps> = ({
	uid,
	avatar,
	name,
}) => {
	return (
		<DescContainer>
			<Avatar src={avatar || ""} alt="userImg" />
			<NameContainer>{name}</NameContainer>
			<UIDContainer>UID:{uid}</UIDContainer>
		</DescContainer>
	);
};

export default UserDescription;
