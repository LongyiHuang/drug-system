import ajax from "./ajax";

/**
 * Description: 公共接口
 *
 * Created by longyihuang on 2019/11/18
 * E-Mail: 475865662@qq.com
 */

// 获取Token
export const reqToken = () => ajax.request('/frameworks/systems/security', 'post')


// 账号密码登录
export const reqLoginByPwd = (data) => ajax.request('/frameworks/systems/login', 'post', data, {showLoading: true})


// 登出
export const reqLogout = (data) => ajax.request('/frameworks/systems/logout', 'post', data, {showLoading: true})

// 获取用户权限
export const reqAuthorities = () => ajax.request('/frameworks/authorities', 'get')
