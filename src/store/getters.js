const getters = {
  permissionRoutes: state => state.permission.routes,
  roles: state => state.user.roles,
	userType: state => state.user.userType,
  avatar: state => state.user.avatar,
	nickname: state => state.user.nickname,
  sidebar: state => state.app.sidebar
}
export default getters
