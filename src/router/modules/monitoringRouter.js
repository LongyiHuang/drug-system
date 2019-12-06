/**
 * Description: 监控路由
 *
 * Created by longyihuang on 2019/10/21
 * E-Mail: 475865662@qq.com
 */
export default [
  {
    path: '/monitoring/sales',
    name: 'Sales',
    component: () => import('@/pages/monitoring/sales'),
    meta: { title: '销量监控', icon: 'shopping-cart-2' }
  },
  {
    path: '/monitoring/drug',
    name: 'Drug',
    component: () => import('@/pages/monitoring/drug'),
    meta: { title: '药品管理', icon: 'link' }
  },
  {
    path: '/monitoring/price',
    component: () => import('@/pages/monitoring/price'),
    name: 'Price',
    meta: { title: '价格监督', icon: 'price-tag', roles: ['admin'] }
  }
]
