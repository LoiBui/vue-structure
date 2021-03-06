import Vue from 'vue'

import AppLayout from './views/layout'
import router from './router'
import store from './store'
import i18n from './thirdParty/i18n'

import './mixins'
import './plugins'
import './thirdParty'
import './directives/globals'

import './assets/scss/style.scss'
import './assets/fonts/bebasneue.css'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  i18n,
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
