import Vue from 'vue'
import Router from 'vue-router'
import Images from '@/components/Images'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Images',
      component: Images
    }
  ]
})
