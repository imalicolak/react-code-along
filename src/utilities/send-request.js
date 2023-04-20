/** @format */

import { getToken } from './users-service';
/** @format */

export default async function sendRequest(url, method = 'GET', payload = null) {
	const options = { method };

	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}

	const token = getToken();

	if (token) {
		options.headers = options.headers || {};
		options.headers.Authorization = `Bearer ${token}`;
	}
	// Fetch uses an options object as a second arg
	// to make requests other than GET, include data,
	// set headers.
	const res = await fetch(url, options);

	// Check if request was successful
	if (res.ok) {
		// res.json() will resolve to the JWT
		return res.json();
	} else {
		throw new Error('Invalid Sign Up');
	}
}
