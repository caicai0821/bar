/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-24 16:25:03
 * @LastEditTime : 2023-05-30 11:39:45
 * @Description  : 正则表达式（用户名，密码）
 *
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const validmap = ['admin', 'editor']
  return validmap.indexOf(str.trim()) >= 0
}
