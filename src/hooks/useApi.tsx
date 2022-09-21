/** @format */

import { useCallback, useEffect, useState } from "react";
import qs from "qs";
import { API } from "../apis/axiosInstance";

export interface callAPIParams {
	url: string;
	method: "get" | "post";
	formData?: {};
}

export default function useAPI(): {
	data: [];
	error: boolean;
	loading: boolean;
	callAPI: ({}: callAPIParams) => void;
} {
	const [data, setData] = useState<[]>([]);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	function callAPI({ url, method, formData = {} }: callAPIParams) {
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
					setData([]);
				} else {
					setError(false);
					setData(response?.data?.D);
					// console.log(response?.data?.D);
				}
			})
			.catch((error) => {
				setError(true);
				setData([]);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return {
		data,
		error,
		loading,
		callAPI,
	};
}
