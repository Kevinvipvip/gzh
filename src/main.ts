import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import config from './config'
import utils from './utils'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

Vue.prototype.config = config
Vue.prototype.utils = utils
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
