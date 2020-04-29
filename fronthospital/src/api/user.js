import request from '@/utils/request'
import qs from 'qs';

export default {
  login(name, password,role) {
    return request({
      url: '/Hospital/login',
      method: 'post',
      // header: 'Content-Type:application/x-www-form-urlencoded',
      data: qs.stringify({'name': name, 'password': password,'role':role})
    })
  },
  register(name, password, role) {
    return request({
      url: '/Hospital/register',
      method: 'post',
      // header: 'Content-Type:application/x-www-form-urlencoded',
      data: qs.stringify({
        'name': name, 'password': password,
        'role': role,
      })
    })
  },
  forgetPassword(userName, mailCode, newPassword) {
    return request({
      url: '/user/forgetPassword',
      method: 'post',
      data: qs.stringify({'userName': userName, 'mailCode': mailCode, 'newPassword': newPassword})
    })
  },
  updateReward(filePath) {
    return request({
      url: '/user/updateReward',
      method: 'put',
      data: qs.stringify({'imgPath': filePath})
    })
  },
  getUserReward() {
    return request({
      url: '/user/getReward',
      method: 'get',
    })
  },
  updatePassword(oldPassword, newPassword, mailCode) {
    return request({
      url: '/user/updatePassword',
      method: 'post',
      data: qs.stringify({'oldPassword': oldPassword, 'newPassword': newPassword, 'code': mailCode})
    })
  },
  updateMail(newMail, oldMailCode, newMailCode) {
    return request({
      url: '/user/updateMail',
      method: 'post',
      data: qs.stringify({'newMail': newMail, 'oldMailCode': oldMailCode, 'newMailCode': newMailCode})
    })
  },
  getUser(page, showCount) { //管理员分页查询用户数据
    return request({
      url: '/user/' + page + '/' + showCount,
      method: 'get',
    })
  },
  getUserByName(searchName, page, showCount) {   //管理层分页模糊查询用户名
    return request({
      url: '/user/search/' + page + '/' + showCount + '?userName=' + searchName,
      method: 'get',
    })
  },
  banUser(userId, userState) {
    return request({
      url: '/user/ban/' + userId + '/' + userState,
      method: 'get',
    })
  },
  logout(){
    return request({
      url: '/user/logout',
      method: 'get',
    })
  }


}
