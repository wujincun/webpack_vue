<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <button @click="clickMe">click!</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello from component a!'
            }
        },
        methods:{
            clickMe(){

            },
        }
    }
</script>
<style>
.hello{
    h1{
        color: blue;
        font-size: 36px;
    }
}
</style>