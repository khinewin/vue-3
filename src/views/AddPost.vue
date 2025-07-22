<template lang="">
    <div>
        <Navbar></Navbar>
        <div v-if="isLoading">Loading...</div>
         <div v-if="isSuccess">The post has been created</div>
        <h1>Add post</h1>
        <form @submit.prevent="savePost">
            <div v-if="error.title">{{error.title}}</div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" @input="resetError('title')">
            <br>
            <div v-if="error.content">{{error.content}}</div>
            <label for="content">Content</label>
            <textarea  id="content" v-model="content" @input="resetError('content')"></textarea>
            <br>
            <button type="submit">Save post</button>
        </form>
    </div>
</template>
<script>
    import axios from "axios"
    import Navbar from "@/views/Navbar.vue"
export default {
    components: {
        Navbar
    },
    data(){
        return{
            server_addr: "http://192.168.1.4:8000",
            title: "",
            content:"",
            error: {
                title:"",
                content:""
            },
            isLoading: false,
            isSuccess:false,
        }
    },
    methods:{
        resetError(data){
            if(data=="title"){
                this.error.title="";
            }else  if(data=="content"){
                this.error.content="";
            }
        },
        savePost(){
            this.isLoading=true;
            const data={
                title: this.title,
                content: this.content
            }
            axios.post(`${this.server_addr}/api/posts`,  data )
            .then((res)=>{
                this.isLoading=false;
                if(res.data.status=="success"){
                    this.isSuccess=true;
                    this.title="";
                    this.content="";
                    setTimeout(()=>{
                        this.isSuccess=false;
                    }, 3000)
                }
              console.log(res)
            })
            .catch((err)=>{
                this.isLoading=false;
                if(err.status==422){
                    if(err.response.data.errors.title){
                            this.error.title=err.response.data.errors.title[0]
                    }
                    if(err.response.data.errors.content){
                            this.error.content=err.response.data.errors.content[0]
                    }

                }

            })

        }
    }
}
</script>
<style lang="">
    
</style>