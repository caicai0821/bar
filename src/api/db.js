export const DBUser = {
  // 存储用户
  setUserList(userList) {
    window.localStorage.setItem('userList', JSON.stringify(userList))
  },
  // 获取用户列表
  getUserList() {
    let userList = []
    try {
      userList = JSON.parse(window.localStorage.getItem('userList')) || []
    } catch (error) {
      userList = []
    }
    return userList
  },
  // 注册用户
  addUser(user) {
    const userList = this.getUserList()
    userList.push(user)
    this.setUserList(userList)
  },
  // 查询用户
  findUser(user) {
    const userList = this.getUserList()
    return userList.find((u) => {
      return u.usernick === user.username && u.password === user.password
    })
  },
  // 用户登录
  login(user) {
    window.sessionStorage.setItem('currUser', JSON.stringify(user))
  },
  //  session存储
  getCurrUser() {
    try {
      return JSON.parse(window.sessionStorage.getItem('currUser') || {})
    } catch (error) {
      return {}
    }
  },
  //   退出登录
  exit() {
    window.sessionStorage.setItem('currUser', '')
  },
}
