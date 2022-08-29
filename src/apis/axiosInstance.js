/** @format */

import axios from "axios";

export const API = axios.create({
	baseURL: "",
	timeout: 20000,
	// "Content-Type": "application/x-www-form-urlencoded",
});

API.interceptors.request.use(
	(config) => {
		const conFig = config;
		//   const state = store.getState();
		//   const jwt = state?.authUser?.JWT;
		//   if (jwt) {
		//     conFig.headers.Authorization = `Bearer ${jwt}`;
		//   } else {
		//     delete API.defaults.headers.common.Authorization;
		//   }
		return conFig;
	},

	(error) => Promise.reject(error),
);
