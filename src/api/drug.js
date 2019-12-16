import ajax from "./ajax";

/**
 * Description: 药品api
 *
 * Created by longyihuang on 2019/12/10
 * E-Mail: 475865662@qq.com
 */
// 查询药品列表
export const queryDrugs = (params) => ajax.request('/drugs', 'get', params, { showLoading: true });

export const queryDrugOption = (params) => ajax.request('/drugs', 'get', params);

// 添加药品
export const createDrug = (params) => ajax.request('/drugs', 'post', params, { showLoading: true });


// 更新药品
export const updateDrug = (params) => ajax.request(`/drugs/${params.id}`, 'patch', params, { showLoading: true });


// 更新药品
export const deleteDrug = (key) => ajax.request(`/drugs/${key}`, 'delete', {}, { showLoading: true });
