import ajax from "./ajax";

/**
 * Description: 权限api
 *
 * Created by longyihuang on 2019/11/18
 * E-Mail: 475865662@qq.com
 */

// 账号密码登录
export const reqLoginByPwd = (data) => ajax.request('/login', 'get', data, { showLoading: true });

// 登出
export const reqLogout = () => ajax.request('/logout', 'get', {}, { showLoading: true });

