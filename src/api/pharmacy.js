import ajax from "./ajax";

/**
 * Description: 药房api
 *
 * Created by longyihuang on 2019/12/10
 * E-Mail: 475865662@qq.com
 */

// 查询药房列表
export const queryPharmacies = (params) => ajax.request('/pharmacies', 'get', params, { showLoading: true });


// 添加药房
export const createPharmacy = (params) => ajax.request('/pharmacies', 'post', params, { showLoading: true });


// 更新药房
export const updatePharmacy = (params) => ajax.request(`/pharmacies/${params.id}`, 'patch', params, { showLoading: true });


// 更新药房
export const deletePharmacy = (key) => ajax.request(`/pharmacies/${key}`, 'delete', {}, { showLoading: true });
