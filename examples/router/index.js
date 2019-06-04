import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config'

import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

Object,key



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:'test',
      component: r => require.ensure([],()=>r(require('../docs/test.md')))
    }
  ]
})
