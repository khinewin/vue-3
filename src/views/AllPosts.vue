<template lang="">
    <div>
        <Navbar />
        <div v-if="isLoading">Loading...</div>
        <div v-if="msg">{{msg}}</div>
        <h1>Get All Posts</h1>
        <table>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Content</td>
                <td>Created Date</td>
                <td>Actions</td>
            </tr>
            <tr v-for="p in posts" :key="p.id">
                <td>{{p.id}}</td>
                <td>{{p.title}}</td>
                <td>{{p.content}}</td>
                <td>{{p.created_at}}</td>
                <td>
                    <button type="button" @click="editPost(p.id)">Edit</button>
                    <button type="button" @click="deletePost(p.id)">Delete</button>
                </td>
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
                posts:[],
                isLoading: false,
                msg:null
            }
        },
        mounted(){
            this.fetchPosts();
        },
        methods:{
            editPost(id){
                this.$router.push({name: "EditPost", params:{id: id}});
            },
            deletePost(id){
                let sure=confirm(`Are you sure ? ,This will delete post with id : ${id}`);
                if(sure){
                    axios.delete(`${this.server_addr}/api/posts/id/${id}`)
                    .then((res)=>{
                        if(res.data.status=="success"){
                            this.msg=res.data.msg;
                            setTimeout(()=>{
                                this.msg=null;
                            }, 3000)
                            this.posts=[]
                            this.fetchPosts();
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            },
            fetchPosts(){
                this.isLoading=true;
                axios.get(`${this.server_addr}/api/posts`)
                .then((res)=>{
                    this.posts=res.data;
                    this.isLoading=false;
                   // console.log(res);
                })
                .catch((err)=>{
                    console.log(err)
                    this.isLoading=false;
                });
            }
        }
}
</script>
<style lang="">
    
</style>