/**
 * Description: 系统设置路由
 *
 * Created by longyihuang on 2019/10/21
 * E-Mail: 475865662@qq.com
 */

import { Role } from "../../common/globalContants";

export default [
  {
    path: '/setting/mine',
    name: 'Mine',
    component: () => import('@/pages/setting/mine'),
	  parentControl: true,
    meta: { title: '我的账户', icon: 'shopping-cart-2', roles: [Role.USER] }
  },
  {
    path: '/setting/user',
    name: 'User',
    component: () => import('@/pages/setting/user'),
    meta: { title: '用户管理', icon: 'link', roles: [Role.ADMIN] }
  },
  {
    path: '/setting/logger',
    component: () => import('@/pages/setting/logger'),
    name: 'Logger',
    meta: { title: '操作日志', icon: 'price-tag', roles: [Role.ADMIN] }
  }
]
