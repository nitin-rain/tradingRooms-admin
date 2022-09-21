/** @format */

import React, { useEffect } from "react";
import PageLayout from "./PageLayout";
import { misTableStyles } from "../styles/mis-table/mis.styles";
import useAPI from "../hooks/useApi";

const MSIreqBody = {
	url: "https://api.raintech.ai/Raindrop/TR/trade.php?adminpass=@misdata!!321&apicall=generatemis",
	method: "get",
};

export default function MSI() {
	const classes = misTableStyles();

	const getMSIData = useAPI();

	useEffect(() => {
		getMSIData?.callAPI(MSIreqBody);
	}, []);

	if (getMSIData?.loading) return <h2>Loading...</h2>;
	if (getMSIData?.error) return <h2>Error</h2>;

	return (
		<PageLayout>
			{getMSIData?.data && (
				<div className={classes.tableContainer}>
					<table cellSpacing={0} className={classes.table}>
						<thead>
							<tr>
								{Object.keys(getMSIData?.data[0]).map((title) => (
									<th key={title}>{title}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{getMSIData?.data?.map((x) => (
								<tr>
									{Object.keys(x).map((key) => (
										<td key={key}>{x[key]}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</PageLayout>
	);
}
