<template lang="">
    <div>
        <Navbar></Navbar>
        <div v-if="error">{{error}}</div>
            <form @submit.prevent="doSignin">
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="user.email">
                </div>
                <div >
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="user.password">
                </div>
                <div>
                    <button type="submit">Signin</button>
                </div>
            </form>
    </div>
</template>
<script>
    import axios from 'axios'
    import Navbar from "@/views/Navbar.vue"
export default {
    components:{
        Navbar
    },
    
    data(){
        return{
            server_addr:"http://192.168.1.4:8000",
            error:null,
            user : {
                email: "",
                password:""
            }
        }
    },

    
    methods:{
        doSignin(){
            if(!this.user.email || !this.user.password){
                this.error="Please fill all input.";
                return true;
            }
            axios.post(`${this.server_addr}/api/create/token`, this.user)
            .then((res)=>{
                console.log(res);
                if(res.status===201){
                    localStorage.setItem("token", res.data.token);
                }
            })
            .catch((err)=>{
                console.log(err)
            });
        },
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