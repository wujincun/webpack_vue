
<template>
        <div id="todoList">
            <h1 v-text="title"></h1>
            <input type="text" v-model="newItem" @key.enter="addNew">
            <ul>
                <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">
                    {{item.label}}
                </li>
            </ul>
        </div>
</template>
<script>
    import Store from "./store"
    import Hello from "./components/hello"
    export default{
        data(){
            return {
                title:'this is todoList',
                newItem:'',
                items:Store.fetch()
            }
        },
        components:{
            Hello
        },//模块必须引入注册
        methods:{
            addNew(){
                this.items.push({
                    label:this.newItem,
                    isFinished:false
                });
                this.newItem='';

            },
            toggleFinish(item){
                item.isFinished = !item.isFinished
            }

        }
    }

</script>
<style>
    .message{
        color: red;
    }
</style>