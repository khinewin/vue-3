<template lang="">
    <div>
        <h1>Add post</h1>
        <form @submit.prevent="savePost">
            <span v-if="error.title">{{error.title}}</span>
            <label for="title">Titlte</label>
            <input type="text" id="title" v-model="title">
            <br>
            <span v-if="error.content">{{error.content}}</span>
            <label for="content">Content</label>
            <textarea  id="content" v-model="content"></textarea>
            <br>
            <button type="submit">Save post</button>
        </form>
    </div>
</template>
<script>
    import axios from "axios"
export default {
    data(){
        return{
            server_addr: "http://192.168.1.4:8000",
            title: "",
            content:"",
            error: {
                title:"",
                content:""
            }
        }
    },
    methods:{
        savePost(){
            const data={
                title: this.title,
                content: this.content
            }
            axios.post(`${this.server_addr}/api/posts`, data )
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{

                if(err.status==422){
                    if(err.response.data.errors.title.length){
                            this.error.title=err.response.data.errors.title[0]
                    }
                    if(err.response.data.errors.content.length){
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