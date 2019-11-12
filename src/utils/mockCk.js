import Cookies from "js-cookie"
/*
* 由于build之后发现cookie不能用了，转而使用session吧
*/

export function setCookie(who,cookie){
	window.sessionStorage.setItem(who,cookie)
	return cookie;
	// return Cookies.set(who,cookie)
}

export function getCookie(who){
	return window.sessionStorage.getItem(who);
	// return Cookies.get(who)
}

export function delCookie(who){
	window.sessionStorage.removeItem(who)
	// return Cookies.remove(who)
}

//时限性cookie
export function setLimitCookie(who,cookie){
	return Cookies.set(who,cookie,{ expires : 0.1 })
}