import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import antInputDirective from 'ant-design-vue/es/_util/antInputDirective'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(VueCodemirror)
Vue.use(Antd)
Vue.use(antInputDirective)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
