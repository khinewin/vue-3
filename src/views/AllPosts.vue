<template lang="">
    <div>
        <Navbar />
        <h1>Get All Posts</h1>
        <table>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Content</td>
                <td>Created Date</td>
            </tr>
            <tr v-for="p in posts" :key="p.id">
                <td>{{p.id}}</td>
                <td>{{p.title}}</td>
                <td>{{p.content}}</td>
                <td>{{p.created_at}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    import Navbar from "@/views/Navbar.vue"
export default {
        components: {
            Navbar
        },
        data(){
            return{
                server_addr: "http://192.168.1.4:8000",
                posts:[]
            }
        },
        mounted(){
            this.fetchPosts();
        },
        methods:{
            fetchPosts(){
                axios.get(`${this.server_addr}/api/posts`)
                .then((res)=>{
                    this.posts=res.data;
                   // console.log(res);
                })
                .catch((err)=>{
                    console.log(err)
                });
            }
        }
}
</script>
<style lang="">
    
</style>