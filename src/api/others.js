import request from "@/utils/request"


export function getSortList(){
	return request({
		method:'post',
		url: `/getSortList`,
	})
}

export function getYourLike(){
	return request({
		method:'post',
		url: `/getYouLike`,
	})
}

export function getSearchData(){
	return request({
		method:'post',
		url: `/getSearchData`,
	})
}