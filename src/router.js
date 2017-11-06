
// 小项目不用懒加载
import Index from './pages/Index.vue'
import About from './pages/About.vue'
import Dialog from './pages/Dialog.vue'
import InputDefault from './pages/InputDefault.vue'
import Test from './pages/Test.vue'
import NotFound from './pages/NotFound.vue'

// 懒加载 start
// const Index = r => require.ensure([], () => r(require('./pages/Index.vue')), 'Index')
// const About = r => require.ensure([], () => r(require('./pages/About.vue')), 'About')
// const Dialog = r => require.ensure([], () => r(require('./pages/Dialog.vue')), 'Dialog')
// const InputDefault = r => require.ensure([], () => r(require('./pages/InputDefault.vue')), 'InputDefault')
// const NotFound = r => require.ensure([], () => r(require('./pages/NotFound.vue')), 'NotFound')
// 懒加载 end

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/dialog', component: Dialog },
  { path: '/inputdefault', component: InputDefault },
  { path: '/test', component: Test },
  // { path: '/dialog', component: Dialog },
  // { path: '/pagecellsphoto', component: PageCellsPhoto },
  // { path: '/circlecount', component: CircleCount },
  // { path: '/testcircle', component: TestCircle },

  // 添加的路由必须在此行以上才能生效
  { path: '*', component: NotFound }

]
export default {
  routes
}
