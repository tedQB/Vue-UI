import Skeleton from './skeleton/index'
import WCol from './col/index'
import WRow from './row/index'
import WButton from './button/index'
import WTag from './button/index'

const components = [
  Skeleton,
  WCol,
  WRow,
  WButton,
  WTag
]

const install =function (Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))

}

if(typeof window!=='undefined' && window.Vue){
  install(window.Vue) //安装组件
}

export default {
  install,
  WCol,
  WRow,
  Skeleton,
  WButton,
  WTag
}
