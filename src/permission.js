import router from './router'
import store from './store'
import { Message } from 'element-ui'
import {getToken, getPageTitle} from "./common/utils"; // progress bar style

const whiteList = ['/login', '/404'] // no redirect whitelist


router.beforeEach(async (to, from, next) => {
  // start progress bar
  // set page title
  document.title = getPageTitle(to.meta.title)
  // determine whether the user has logged in
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
	    const roles = store.getters.roles
	    if (roles) {
		    next();
	    } else {
		    try {
			    const roles = ['admin']
			    await store.dispatch('user/setRoles', roles);
			    const newRoutes = await store.dispatch('permission/generateRoutes', roles);
			    router.addRoutes(newRoutes);
			    next({ ...to, replace: true });
		    } catch (error) {
			    // remove token and go to login page to re-login
			    Message.error(error || 'Has Error')
			    next({ path: '/login' })
		    }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login');
    }
  }
});

