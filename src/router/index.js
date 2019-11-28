import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
       {
         path:'/a',
         name:'A',
         component: resolve => require(['@/components/a.vue'], resolve),//路由懒加载
         meta:{keepAlive:true},
         children:[{
           path:'/a/x',
           name:'X',
           component:resolve => require(['@/components/x.vue'], resolve),
         }]
       },
       {
        path:'/b',
        name:'B',
        component: resolve => require(['@/components/b.vue'], resolve),//路由懒加载
      },
      {
        path:'/y',
        name:'y',
        component: resolve => require(['@/components/y.vue'], resolve),//路由懒加载
      }
  ]
})
export default router
router.beforeEach((to,from,next)=>{
       next()
})