<template lang="">
    <div>
        <div v-if="error">{{error}}</div>
        <div v-if="msg">{{msg}}</div>
        <h1>Signup new user account</h1>
        <form @submit.prevent="saveUser">
            <div>
                <label for="name">Name</label>
                 <input type="text" id="name" v-model="user.name">
            </div>
             <div>
                <label for="email">Email</label>
                 <input type="email" id="email" v-model="user.email">
            </div>
             <div>
                <label for="password">Password</label>
                 <input type="text" id="password" v-model="user.password">
            </div>
            <div>
                <button type="submit">Signup</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from "axios";
export default {
    data(){
        return{
            server_addr: "http://192.168.1.4:8000",
            error:null,
            user:{
                name:"",
                email:"",
                password:"",
            },
            msg:null
        }
    },
    methods:{
        saveUser(){
            if(!this.user.name || !this.user.email || !this.user.password){
                this.error="Please fill all input"
                return true;
            }
            axios.post(`${this.server_addr}/api/create/user`, this.user)
            .then((res)=>{
                if(res.status===201){
                    this.msg=res.data.msg;
                    this.user={
                        name: "",
                        email:"",
                        password:"",
                    }
                }
                console.log(res)
            })
            .catch((err)=>{
                console.log(err);
            });

        }
    }
}
</script>
<style lang="">
    
</style>