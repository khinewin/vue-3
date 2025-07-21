<template lang="">
    <div>
        <Navbar></Navbar>
        <div v-if="isLoading">Loading...</div>
         <div v-if="isSuccess">The post has been updated</div>
        <h1>Edit post</h1>
        <form @submit.prevent="savePost" v-if="post">
            <div v-if="error.title">{{error.title}}</div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="post.title" @input="resetError('title')">
            <br>
            <div v-if="error.content">{{error.content}}</div>
            <label for="content">Content</label>
            <textarea  id="content" v-model="post.content" @input="resetError('content')"></textarea>
            <br>
            <button type="submit">Update post</button>
        </form>
    </div>
</template>
<script>
    import axios from "axios"
    import Navbar from '@/views/Navbar.vue'
export default {
    components:{
        Navbar
    },
    data(){
        return{
            id: this.$route.params.id,
            server_addr: "http://192.168.1.4:8000",
            post:null,
            error:{
                title:"",
                content:""
            },
            isLoading:false,
            isSuccess:false,
        }
    },
    mounted(){
      this.fetchPost();
    },
    methods:{
        savePost(){
            this.isLoading=true;
            const data={
                id: this.id,
                title: this.post.title,
                content: this.post.content,
            }
            axios.put(`${this.server_addr}/api/posts`, data)
            .then((res)=>{
                this.isLoading=false;
                if(res.status===200){
                    this.isSuccess=true;
                    setTimeout(()=>{
                        this.isSuccess=false;
                    }, 2000)
                }
                console.log(res)
            })
            .catch((err)=>{
                this.isLoading=false;
                console.log(err)
            })
        },
        fetchPost(){
            axios.get(`${this.server_addr}/api/posts/id/${this.id}`)
            .then((res)=>{
                this.post=res.data.data;
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            });
        },
        resetError(data){
            if(data=="title"){
                this.error.title="";
            }else  if(data=="content"){
                this.error.content="";
            }
        },
    }
}
</script>
<style lang="">
    
</style>