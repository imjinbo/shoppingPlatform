import axios from "axios"

export default function() {
	return axios({
		method: 'post',
		url: "/api/v1/home/page",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}

	})
}


