import Vue from 'vue'
import App from './App.vue'
import router from './router'


import './assets/css/bootstrap.min.css'
import './assets/css/animations.css'
import './assets/js/bootstrap.min'
import './assets/css/demo.css'
import './assets/js/public'
import './assets/js/css3-animate-it'
import './assets/js/bootstrap.min'

import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
