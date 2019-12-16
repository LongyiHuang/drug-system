import ajax from "./ajax";

/**
 * Description: 销售api
 *
 * Created by longyihuang on 2019/12/11
 * E-Mail: 475865662@qq.com
 */


// 查询销售记录列表
export const querySales = (params) => ajax.request('/drugs/records', 'get', params, { showLoading: true });

// 删除销售记录
export const deleteSales = (key) => ajax.request(`/drugs/records/${key}`, 'delete', {}, { showLoading: true });

