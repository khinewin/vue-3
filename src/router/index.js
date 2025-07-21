import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AddPost from '@/views/AddPost.vue'
import AllPosts from '@/views/AllPosts.vue'
import Edit from '@/views/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [   
    {
      path: "/",
      name: "Home", 
      component: Home
    },
    {
      path: "/posts/add", 
      name: "AddPost", 
      component: AddPost
    },{
      path: "/posts/all",
      name: "GetAllPosts", 
      component: AllPosts
    },{
      path: "/posts/:id/edit",
      name:"EditPost",
      component: Edit,
    }
  ],
})

export default router
