
<template>
    <div>
        <p class="message">{{ message }}</p>
        <input v-model="message">
        <hello></hello>
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    </div>
</template>
<script>
    import Hello from "./components/hello"
    export default{
        data(){
            return {
                message: 'Hello Vue.js!'
            }
        },
        components:{
            Hello
        },//模块必须引入注册

    }

</script>
<style>
    .message{
        color: red;
    }
</style>