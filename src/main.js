import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)

import store from './store'



new Vue({
  router,
  Vuelidate,
  render: h => h(App),
  store
}).$mount('#app')