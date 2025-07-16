<template lang="">
    <div>
        <h1>Home</h1>
        <button @click="goAddPost">Add Post</button>
        <br>
        <button @click="goGetAllPosts">Get All Posts</button>
    </div>
</template>
<script>
export default {
    
    methods:{
        goAddPost(){
            this.$router.push({name: 'AddPost'});
        },
        goGetAllPosts(){
            this.$router.push({name: "GetAllPosts"})
        }
    }

}
</script>
<style lang="">
    
</style>