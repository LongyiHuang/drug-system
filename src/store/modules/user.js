import {resetRouter, constantRoutes} from "@/router";

const state = {
  publicKey: localStorage.getItem('publicKey'),
  name: '',
  avatar: '',
  key: undefined,
  roles: undefined
}

const mutations = {
	SET_USER: (state, user) => {
		state.name = user.nickname;
		state.avatar = user.avatar;
		state.phone = user.phone
		state.key = user.key;
	},

	SET_ROLES: (state, roles) => {
		state.roles = roles;
	}
}

const actions = {
	setRoles: function ({ commit }, roles) {
		commit('SET_ROLES', roles);
	},

  // user login
  async login ({ commit }, loginForm) {
    // 获取token
		console.log('do login')
  },

  // user logout
  async logout ({ commit, state, dispatch }) {
    // await reqLogout();
	  console.log('do logout')
    commit('SET_USER', {});
    commit('SET_ROLES', []);
	  resetRouter(constantRoutes);
    localStorage.removeItem('token');
    localStorage.removeItem('publicKey');
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
