import Vue from 'vue'
import config from './config'
import qs from 'qs'
import axios from 'axios'
const utilsVue = new Vue()
const rp = require('request-promise-native')

const login = (code: String) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: config.api + 'login.php',
      data: qs.stringify({ code: code }),
      // 请求超时时间
      timeout: 10000
    }).then((res:any) => {
      // console.log(res)
      if (res.data.code === 1) {
        resolve(res.data.data)
      } else {
        reject(res.data.data)
      }
    }).catch((res) => {
      console.log(res)
      utilsVue.$toast('网络超时')
    })
  })
}

// 跳转微信授权，获取code
const auth = (routePath: String) => {
  let appid = config.appid
  let redirectUri = encodeURIComponent(config.vue_base + routePath)
  location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
}

// 获取url参数对象（目前只在登录判断中用到）
const getParams = () => {
  let url: String = location.search
  let params: any = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      let kv = strs[i].split('=') // key 和 value
      params[kv[0]] = unescape(kv[1])
    }
  }
  return params
}

export default {
  auth, getParams, login
}
