import { Message } from 'element-ui'
import store from '@/store';
import { constantRoutes, resetRouter } from "../router";

export function showMessage (content, type) {
  Message({
    message: content,
    type: type,
    showClose: true,
    duration: 2000
  })
}


const title = document.title;
export function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}


export function getUserInfo () {
	let userInfo = null;
	try {
		const userInfoStr = localStorage.getItem('userInfo')
		if (userInfoStr) {
			userInfo = JSON.parse(userInfoStr)
		}
	} catch (e) {
		console.log(e)
	}
  return userInfo;
}

export function setUserInfo (user) {
	if (user) {
		localStorage.setItem('userInfo', JSON.stringify(user));
	} else {
		localStorage.removeItem('userInfo');
	}
}


export function afterLogout () {
	store.dispatch('user/setRoles', undefined);
	setUserInfo(undefined);
	resetRouter(constantRoutes);
}





export function auditAuthority (authorityCode) {
  let authorities = [];
  try {
    const authoritiesStr = localStorage.getItem('authorities')
    if (authoritiesStr) {
      authorities = JSON.parse(authoritiesStr);
    }
  } catch (e) {
    console.log(e)
  }
  const supperManager = authorities.indexOf('D0B4BB6974CB1502906CAF72AE80F7BE') > -1;
  const passAudit = authorities.indexOf(authorityCode) > -1;
  return passAudit || supperManager;
}

/**
 * 判断是否为http链接
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 *  十六进制颜色随机
 * @returns {string}
 */
export function color16 () {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	return color;
}
