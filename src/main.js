// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vonic from 'vonic'
import store from '../store/index'
import routes from 'demo/main'
// import routes from 'router'

Vue.use(Vonic.app, {
  routes: routes.routes
})
