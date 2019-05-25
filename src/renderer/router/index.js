import Vue from 'vue'
import Router from 'vue-router'
import Machines from '@/views/Machines/Machines'
import MachinesPrograms from '@/views/Machines/MachinesPrograms'
import Test from '@/views/Test'
import Programs from '@/views/Programs/Programs'
import AddProgram from '@/views/Programs/AddProgram'
import Tools from '@/views/Tools'
import Settings from '@/views/Settings'
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
        },
        {
          path: '/programs',
          name: 'programs',
          component: Programs
        },
        {
          path: '/add_program',
          name: 'add_program',
          component: AddProgram
        },
        {
          path: '/tools',
          name: 'tools',
          component: Tools
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
