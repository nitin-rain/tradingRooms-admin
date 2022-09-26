/** @format */

import styled from "styled-components";

interface userNavProps {
	handleActiveNavChange: (item: string) => void;
	activeNav: string;
}

const NavContainer = styled.div`
	height: auto;
	background: var(--paper);
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const ListContainer = styled.ul`
	width: 100%;
	padding: 0;
`;

const ListItems = styled.li<{
	activeNav: string;
	item: string;
}>`
	text-decoration: none;
	text-align: left;
	list-style: none;
	border-bottom: 1px solid var(--border);
	padding: 0.5rem 1rem;
	font-weight: ${(props) => (props.activeNav === props.item ? 600 : 400)};
	cursor: pointer;
	color: ${(props) =>
		props.activeNav === props.item ? "#4d5e80" : "var(--secondary-blue-dark)"};
	&:hover {
		font-weight: 700;
	}
`;

const UserNav: React.FC<userNavProps> = ({
	handleActiveNavChange,
	activeNav,
}) => {
	const navList: string[] = [
		"User Profile",
		"Broker",
		"Wallet",
		"Created Rooms",
		"Room Membership",
	];

	return (
		<NavContainer>
			<ListContainer>
				{navList.map((item) => (
					<ListItems
						key={item}
						activeNav={activeNav}
						item={item}
						onClick={() => handleActiveNavChange(item)}
					>
						{item}
					</ListItems>
				))}
			</ListContainer>
		</NavContainer>
	);
};

export default UserNav;
