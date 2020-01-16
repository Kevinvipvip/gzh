/**
 * 项目内的一些公共参数
 *
 * base: 网址根域名
 * api_base: api根域名
 * local_base: 本地根域名
 */

let base: String = 'http://www.ganrongjian.cn'
let apiBase: String = 'http://www.ganrongjian.cn/wechat'

let config: any = {
  // local_model: process.env.NODE_ENV === 'development', 如果是开发环境，则本地模式为true
  local_model: false,
  // 本地token
  local_token: '2a510a8437356d921fd209bfc968a1e1',

  base: base + '/',
  api: apiBase + '/',
  vue_base: base + '/dist/#',

  tel_reg: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  appid: 'wx8d0e6ffcf3b76ba5',
  secret: 'ba1bafd43122593d27768919e035ba0c'

}

export default config
