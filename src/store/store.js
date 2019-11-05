import Vue from 'vue'
import Vuex from 'vuex'
import user from "./components/user"
Vue.use(Vuex)

export default new Vuex.Store({
	//这里需要用到module的木块来分割
	modules:{
		user
	}
})
