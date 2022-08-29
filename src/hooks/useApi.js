/** @format */

import { useCallback, useEffect, useState } from "react";
import qs from "qs";
import { API } from "../apis/axiosInstance";

export default function useAPI() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(null);

	// const callAPI = useCallback(() => , [url, method]);

	function callAPI({ url, method, formData = null }) {
		setLoading(true);
		setError(false);
		API({
			method,
			url,
			data: qs.stringify(formData),
		})
			.then((data) => {
				const response = data;

				if (response?.data?.E) {
					setError(true);
					setData(null);
				} else {
					setError(false);
					setData(response?.data?.D);
					// console.log(response?.data?.D);
				}
			})
			.catch((error) => {
				setError(true);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	// useEffect(() => {
	// 	console.log("inside");
	// 	callAPI();
	// }, [url]);

	return {
		data,
		error,
		loading,
		callAPI,
	};
}
