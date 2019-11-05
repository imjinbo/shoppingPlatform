import Cookies from "js-cookie"

export function setCookie(who,cookie){
	return Cookies.set(who,cookie)
}

export function getCookie(who){
	return Cookies.get(who)
}

export function delCookie(who){
	return Cookies.remove(who)
}

//时限性cookie
export function setLimitCookie(who,cookie){
	return Cookies.set(who,cookie,{ expires : 0.1 })
}