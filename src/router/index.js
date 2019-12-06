import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../layout'
import settingRouter from "./modules/settingRouter";
import monitoringRouter from "./modules/monitoringRouter";

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index'),
    hidden: true
  },
  {
    path: '/404',
	  name: 'Error404',
    component: () => import('@/pages/error/404'),
    hidden: true
  }
]

export const asyncRoutes = [
	{
		path: '/',
		component: Layout,
		redirect: '/statistics',
		children: [
			{
				path: '/statistics',
				name: 'Statistics',
				component: () => import('@/pages/statistics'),
				meta: { title: '统计', icon: 's-data' }
			},
			{
				path: '/monitoring',
				name: 'Monitoring',
				meta: { title: '药品监控', icon: 'view' },
				redirect: '/monitoring/sales',
				component: () => import('@/pages/monitoring'),
				children: monitoringRouter
			},
			{
				path: '/pharmacy',
				name: 'Pharmacy',
				component: () => import('@/pages/pharmacy'),
				meta: { title: '药房管理', icon: 's-shop', roles: ['admin'] }
			},
			{
				path: '/setting',
				name: 'Setting',
				meta: { title: '系统设置', icon: 'setting' },
				redirect: '/setting/mine',
				component: () => import('@/pages/setting'),
				children: settingRouter
			}
		]
	},
	{ path: '*', redirect: '/404', hidden: true }
]


const createRouter = (routes) => {
  return new Router({
    mode: 'history', // require service support
	  scrollBehavior: () => ({ y: 0 }),
    routes
  })
}

const router = createRouter(constantRoutes);

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter (routes) {
  const newRouter = createRouter(routes)
  router.matcher = newRouter.matcher // reset router
}


export default router;
