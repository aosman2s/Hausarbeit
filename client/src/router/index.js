import Vue from 'vue'
import VueRouter from 'vue-router'
import Html_component from '@/components/Html-Tab-Component.vue'
import Css_component from '@/components/Css-Tab-Component.vue'
import JavaScript_component from '@/components/JavaScript-Tab-Component.vue'
import Main_component from '@/components/MainComponent.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'maincomponent',
    component: Main_component,
    children:[
      {
        path: 'html',
        name: 'html',
        component: Html_component
      },
      {
        path: 'css',
        name: 'css',
        component: Css_component
      },
      {
        path: 'javascript',
        name: 'javascript',
        component: JavaScript_component
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
