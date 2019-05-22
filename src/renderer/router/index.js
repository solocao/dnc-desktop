import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/components/Main').default,
      children: [
        {
          path: '/machines',
          name: 'machines',
          component: require('@/views/Machines').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
