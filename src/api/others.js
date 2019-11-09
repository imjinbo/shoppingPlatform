import request from "@/utils/request"


export function getSortList(){
	return request({
		method:'post',
		url: `/mi/v1/home/category_v2`,
	})
}

export function getYourLike(){
	return request({
		method:'post',
		url: `/mi/v1/home/recommendBlank`,
	})
}

export function getSearchData(){
	return request({
		method:'post',
		url: `/mi/v1/hisearch/se_default`,
	})
}