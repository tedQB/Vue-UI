import Skeleton from './src/skeleton.vue'

Skeleton.install = function (Vue) {
  Vue.component(Skeleton.name, Skeleton) //注册组件
}
export default Skeleton
