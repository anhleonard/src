import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'header',
          name: 'HeaderView',
          component: HeaderView
        },
        {
          path: 'container',
          name: 'ContainerView',
          component: ContainerView
        }
      ]
    }
  ]
})
