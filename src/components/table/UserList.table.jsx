/** @format */

import React, { useEffect, useState } from "react";
import { tableStyles } from "../../styles/tables/table.styles";

export default function UserListTable({ columns, data }) {
	const classes = tableStyles();
	const [users, setUsers] = useState([]);
	const limit = 15;

	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(limit);

	const handleNext = () => {
		setStart(end);
		setEnd(end + limit);
	};

	const handlePrev = () => {
		if (start !== 0) {
			setStart(start - limit);
			setEnd(end - limit);
		}
	};

	useEffect(() => {
		setUsers([...data?.slice(start, end)]);
	}, [start, end]);

	console.log("users----", users);

	return (
		<div className={classes.tableContainer}>
			<table className={classes.table}>
				<thead>
					<tr>
						{columns?.map((item) => (
							<th>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{users?.map((item) => (
						<tr key={item?.uid}>
							<td>{item?.uid}</td>
							<td>{item?.producername}</td>
							<td>{item?.email}</td>
							<td>{item?.mobile}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={classes.paginationArea}>
				<div>users:{data?.length}</div>
				<div>page no : {end / 15}</div>
				<div>
					<button onClick={handlePrev}>Prev</button>
					<button onClick={handleNext}>Next</button>
				</div>
			</div>
		</div>
	);
}
