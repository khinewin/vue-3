import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from "@/views/UserView.vue"
import SearchView from  '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path:'/about',
      name: "About",
      component: AboutView
    },{
      path:"/user/:user_id",//params
      name: "UserById",
      component: UserView
    },
    {
      path: "/search",
      name: "Search", 
      component:SearchView
    }
  
  ],
})

export default router
