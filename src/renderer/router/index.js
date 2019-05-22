import Vue from 'vue'
import Router from 'vue-router'
import Machines from '@/views/Machines/Machines'
import MachinesPrograms from '@/views/Machines/MachinesPrograms'
import Test from '@/views/Test'
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
          component: Machines
        },
        {
          path: '/machinesPrograms',
          name: 'machinesPrograms',
          component: MachinesPrograms
        },
        {
          path: '/test',
          name: 'test',
          component: Test
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
