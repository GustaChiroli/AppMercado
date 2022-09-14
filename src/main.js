/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuetify from '@/plugins/vuetify'

import 'vuetify/dist/vuetify.min.css'

import Login from './components/Login.vue'
import Main from './components/Main'
import Registrar from './components/Registrar'

Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: '#7957d5'
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registrar',
      component: Registrar
    },
    {
      path: '/main',
      component: Main
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router: router,
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

router.replace('/login')
