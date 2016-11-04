
<template>
    <div>
        <p class="message">{{ message }}</p>
        <input v-model="message">
    </div>
</template>
<script>
    export default{
        data(){
            return {
                message: 'Hello Vue.js!'
            }
        }
    }

</script>
<style>
    .message{
        color: green;
    }
</style>