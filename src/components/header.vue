<template>
    <Component-a></Component-a>
    <div @click="doThis">click here</div>
</template>
<script>
    import ComponentA from "./componenntA"
    export default{
        data(){
            return{
                username:'wujincun'
            }
        },
        props:['msg'],
        components:{
            ComponentA
        },
        methods:{
            doThis(){
                console.log(this.msg)
            }
        }
    }
</script>
<style lang="less">


</style>
