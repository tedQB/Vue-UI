import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../pages/index'
//import navConf from '../nav.config.json'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Pages
    },
    {
      path:'/guid',
      name:'guid',
      component: r => require.ensure([],()=>r(require('../docs/guid.md')))
    },
    {
      path:'/install',
      name:'install',
      component: r => require.ensure([],()=>r(require('../docs/install.md')))
    },
    {
      path:'/logs',
      name:'logs',
      component: r => require.ensure([],()=>r(require('../docs/logs.md')))
    },
    {
      path:'/start',
      name:'start',
      component: r => require.ensure([],()=>r(require('../docs/start.md')))
    },
    {
      path:'/layout',
      name:'layout',
      component: r => require.ensure([],()=>r(require('../docs/layout.md')))
    },
    {
      path:'/test',
      name:'test',
      component: r => require.ensure([],()=>r(require('../docs/test.md')))
    },

  ]
})


/*
Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  if(router){
    router.forEach((route) => {
      if(route.items){
        addComponent(routes.items)
        routes = routes.concat(route.items)
      } else {
        if ( route.type === 'pages'){
          route.component = r => require.ensure([],() =>
            r(require(`../pages/${route.name}.vue`)))
            return
        }
        route.component = r => require.ensure([],()=>
          r(require(`../docs/${route.name}.md`)))
      }
    })
  }
}

addComponent(routes)

*/
