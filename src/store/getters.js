const getters = {
  permissionRoutes: state => state.permission.routes,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  userName: state => state.user.name,
  sidebar: state => state.app.sidebar
}
export default getters
