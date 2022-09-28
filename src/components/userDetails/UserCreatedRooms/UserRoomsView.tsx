/** @format */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	overflow-y: auto;
`;

const Rooms = styled.div`
	width: 98%;
`;

const Title = styled.div`
	color: var(--secondary-text);
	font-weight: 600;
	margin-bottom: 0.5rem;
	margin-left: 0.5rem;
`;

const BoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 0.5rem;
`;
const BoxItems = styled.div`
	width: 33%;
	background-color: var(--paper);
	border-radius: 8px;
`;

const PropertyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid var(--border);
	color: var(--secondary-text);
	font-size: 13px;
	/* padding: 1rem; */
`;

const KeyContainer = styled.div`
	display: flex;
	flex: 0.25;
	border-right: 1px solid var(--border);
	padding: 0.5rem;
`;

const ValueContainer = styled.div`
	padding: 0.5rem;
	flex: 0.75;
`;

interface userRoomViewProps {
	roomsList: [];
}

const UserRoomsView: React.FC<userRoomViewProps> = ({ roomsList }) => {
	return (
		<Container>
			{roomsList?.map((room: any) => (
				<Rooms key={room.rid}>
					<Title>{room?.roomname}</Title>
					<BoxContainer>
						<BoxItems>
							<PropertyContainer>
								<KeyContainer>RID</KeyContainer>
								<ValueContainer>{room?.rid || "N/A"}</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>Slug</KeyContainer>
								<ValueContainer>{room?.slug || "N/A"}</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>Created On</KeyContainer>
								<ValueContainer>{room?.createdat || "N/A"}</ValueContainer>
							</PropertyContainer>
						</BoxItems>

						{/* ----- Box 2 ----- */}
						<BoxItems>
							<PropertyContainer>
								<KeyContainer>Min Investment</KeyContainer>
								<ValueContainer>
									{room?.minimuminvestment || "N/A"}
								</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>No of Trades</KeyContainer>
								<ValueContainer>{room?.tradecount || "N/A"}</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>No of Members</KeyContainer>
								<ValueContainer>{room?.membercount || "N/A"}</ValueContainer>
							</PropertyContainer>
						</BoxItems>

						{/* --- Box 3 ---- */}
						<BoxItems>
							<PropertyContainer>
								<KeyContainer>No of Plans</KeyContainer>
								<ValueContainer>{room?.plancount}</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>Open Access</KeyContainer>
								<ValueContainer>
									{room?.private === 0 ? "No" : "Yes" || "N/A"}
								</ValueContainer>
							</PropertyContainer>
							<PropertyContainer>
								<KeyContainer>Free Look</KeyContainer>
								<ValueContainer>
									{room?.freelook === 0 ? "No" : "Yes" || "N/A"}
								</ValueContainer>
							</PropertyContainer>
						</BoxItems>
					</BoxContainer>
				</Rooms>
			))}
		</Container>
	);
};

export default UserRoomsView;
