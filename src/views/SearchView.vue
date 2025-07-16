<template lang="">
    <div>
        <h1>Search {{q}}</h1>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            q : this.$route.query.q ?? "No query"
        }
    }
}
</script>
<style lang="">
    
</style>