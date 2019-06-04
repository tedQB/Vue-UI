import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

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

console.log(routes);
export default new Router({
  routes:routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   },
  //   {
  //     path:'/pages',
  //     name:'pages',
  //     component: index
  //   },
  //   {
  //     path:'/test',
  //     name:'test',
  //     component: r => require.ensure([],()=>r(require('../docs/test.md')))
  //   },
  //
  // ]
})
