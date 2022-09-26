/** @format */

import React from "react";
import styled from "styled-components";
import { User } from "../../sampleData/users";

const Container = styled.div`
	border: 1px solid red;
	width: 100%;
	background-color: var(--paper);
	border-radius: 10px;
	border: 1px solid var(--border);
	/* padding: 1rem; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const PropertyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid var(--border);
	color: var(--secondary-text);
	/* padding: 1rem; */
`;

const KeyContainer = styled.div`
	display: flex;
	flex: 0.2;
	border-right: 1px solid var(--border);
	padding: 0.8rem;
`;

const ValueContainer = styled.div`
	padding: 0.8rem;
	flex: 0.8;
`;

const UserProfile = () => {
	return (
		<Container>
			<PropertyContainer>
				<KeyContainer>Name</KeyContainer>
				<ValueContainer>{User.producername || "N/A"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Email</KeyContainer>
				<ValueContainer>{User.email || "N/A"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Phone Number</KeyContainer>
				<ValueContainer>{User.mobile || ""}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Country</KeyContainer>
				<ValueContainer>{User.country || "--"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>State</KeyContainer>
				<ValueContainer>{User.state || "--"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>City</KeyContainer>
				<ValueContainer>{User.city || "--"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Address</KeyContainer>
				<ValueContainer>
					Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
					563-7401 Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
					(257) 563-7401
				</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Distributor Code</KeyContainer>
				<ValueContainer>{User.dcode || "--"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Intrducer Link</KeyContainer>
				<ValueContainer>{User.dcode || "--"}</ValueContainer>
			</PropertyContainer>
			<PropertyContainer>
				<KeyContainer>Profile created on</KeyContainer>
				<ValueContainer>{User.dcode || "--"}</ValueContainer>
			</PropertyContainer>
		</Container>
	);
};

export default UserProfile;
