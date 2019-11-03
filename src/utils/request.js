import axios from "axios"

export default function(data) {
	return axios({
		method: data.method || 'GET',
		url: data.url,
		headers: {
			'Content-Type': data.header || 'application/x-www-form-urlencoded',
		}
	})
}


