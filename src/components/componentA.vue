<template>
    <div id="hello">
        <h1>{{msg}}</h1>
        <button @click="clickMe">open mouse!</button>
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
                this.$emit('childrenTellMe',this.msg)//第一个参数是向父组件传递的自定义事件名，第二个参数是向父组件传递的信息
            },
        }
    }
</script>
<style lang="less">
#hello{
    h1{
        color: blue;
        font-size: 36px;
    }
}
</style>