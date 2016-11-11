<template>
    <div class="headerC">
        <p>childrenTellMe:{{childWords}}</p>
        <Component-a v-on:childrenTellMe="listenToBoy"></Component-a>
        <div @click="doThis">click here</div>
    </div>
</template>
<script>
    import ComponentA from "./componentA"
    export default{
        data(){
            return{
                username:'wujincun',
                childWords:''
            }
        },
        props:['msg'],
        components:{
            ComponentA
        },
        methods:{
            doThis(){
                console.log(this.msg)
            },
            listenToBoy(msg){
                this.childWords = msg  //childWords必须在data里注册，否则这里不能更新   $emit
            }
        }
    }
</script>
<style lang="less">


</style>
