import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CitiesComparison from './components/CitiesComparison.vue'

Vue.use(VueRouter);

const router =  new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/compare',
      name: 'Compare',
      component: CitiesComparison
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

