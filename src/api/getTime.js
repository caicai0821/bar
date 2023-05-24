/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-24 15:25:58
 * @LastEditTime : 2023-05-24 15:27:57
 * @Description  : 获取时间的api
 *
 */

export function currentTime() {
  const date = new Date()
  const year = date.getFullYear() // 月份从0~11，所以加一
  const dateArr = [date.getMonth() + 1, date.getDate()]
  // 如果格式是MM则需要此步骤，如果是M格式则此循环注释掉
  for (let i = 0; i < dateArr.length; i++) {
    if (dateArr[i] >= 1 && dateArr[i] <= 9) {
      dateArr[i] = '0' + dateArr[i]
    }
  }
  const strDate = year + '-' + dateArr[0] + '-' + dateArr[1]
  return strDate
}
