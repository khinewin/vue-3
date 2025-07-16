<template lang="">
    <div>
        <h1>User Page {{user_id}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user_id : this.$route.params.user_id,
        }
    }
}
</script>
<style lang="">
    
</style>