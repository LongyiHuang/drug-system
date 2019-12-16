import ajax from "./ajax";

/**
 * Description: 统计数据api
 *
 * Created by longyihuang on 2019/12/11
 * E-Mail: 475865662@qq.com
 */


// 查询药品最近一周价格
export const queryDrugStatistics = (params) => ajax.request('/drugs/records/statistics', 'get', params, { showLoading: true });

// 查询药房指标
export const queryPharmacyStatistics = () => ajax.request('/statistics/pharmacy', 'get', {}, { showLoading: true });

// 查询系统指标
export const queryAdminStatistics = () => ajax.request('/statistics/administrator', 'get', {}, { showLoading: true });

