import { reqLoginByPwd, reqLogout } from "@/api/auth";
import { afterLogout, setUserInfo } from "../../common/utils";

const state = {
  roles: undefined
}

const mutations = {
	SET_ROLES: (state, roles) => {
		state.roles = roles;
	}
}

const actions = {
	setRoles: function ({ commit }, roles) {
		commit('SET_ROLES', roles);
	},

  // user login
  login ({ commit }, loginForm) {
		return new Promise(async (resolve, reject) => {
			const data = await reqLoginByPwd(loginForm);
			if (data) {
				console.log(data)
				setUserInfo(data);
				resolve(data);
			}
			reject(new Error('登录失败'));
		});
  },

  // user logout
  async logout ({ commit }) {
	  return new Promise(async (resolve) => {
		  await reqLogout();
		  afterLogout();
		  resolve();
	  });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
