<template lang="">
  <div>
    <h1>Home</h1>
    <router-link :to="{name: 'About'}">About</router-link>
    <br>
    <!--<router-link to="/user/300">User</router-link>-->
    <router-link :to="{name: 'UserById', params : {user_id: 52}}" >User</router-link>

    <router-link to="/search?q='My Data'">Search</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>