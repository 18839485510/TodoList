import Vue from 'vue'
import App from './App.vue'
import router from './router'

//关闭生产模式环境更改提示
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

