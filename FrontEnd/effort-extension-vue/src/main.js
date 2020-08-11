import Vue from 'vue'
// import VueRouter from './router'
import VueRouter from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import EffortExtension from './components/EffortExtension'
import Logo from './components/Logo.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/effort/:workItemId',
      name: 'workItems',
      component: EffortExtension
    },
    {
      path: '',
      name: 'Logo',
      component: Logo
    }
  ]
})
Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
