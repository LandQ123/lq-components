/*
 * @Author: 姜海华
 * @Date: 2017-11-08 18:56:01
 * @Last Modified by: jhh678
 * @Last Modified time: 2018-05-26 14:35:36
 */
// import config from '@/config'
import router from '@/router'
// import {
//   api
// } from './rest-api'
import {
  sessionStore
} from '@/utils'
// import {
//   Message
// } from '@/components'

const auth = {
  isLogined() {
    return !!sessionStore.get('userInfo')
  },
  goLogin() {
    let currentPath = encodeURIComponent(router.history.pending.fullPath)
    router.push({
      path: '/login?router=' + currentPath
    })
  }
}

export default auth
