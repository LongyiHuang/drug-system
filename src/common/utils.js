import { Message } from 'element-ui'


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


export function getToken () {
  return localStorage.getItem('token');
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
