import ajax from "./ajax";

/**
 * Description: 用户api
 *
 * Created by longyihuang on 2019/12/10
 * E-Mail: 475865662@qq.com
 */

// 修改用户信息
export const updateUserInfo = (params) => ajax.request('/userInfo', 'patch', params, { showLoading: true });


// 修改密码
export const updatePassword = (params) => ajax.request('/password/reset', 'patch', params, { showLoading: true });


// 查询用户列表
export const queryUsers = (params) => ajax.request('/users', 'get', params, { showLoading: true });


// 添加用户
export const createUser = (params) => ajax.request('/users', 'post', params, { showLoading: true });


// 更新用户
export const updateUser = (params) => ajax.request(`/users/${params.id}`, 'patch', params, { showLoading: true });


// 更新用户
export const deleteUser = (key) => ajax.request(`/users/${key}`, 'delete', {}, { showLoading: true });

// 管理员重置用户密码
export const resetPassword = (key) => ajax.request(`/users/${key}/password/reset`, 'patch', {}, { showLoading: true });

// 查询操作日志
export const queryLogs = (params) => ajax.request('/operations/logs', 'get', params, { showLoading: true });





