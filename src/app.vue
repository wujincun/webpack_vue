
<template>
        <div id="todoList">
            <h1 v-text="title"></h1><!--<h1>{{title}}</h1>相同-->
            <input type="text" v-model="newItem"  @keyup.enter="addNew">
            <ul>
                <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">
                    {{item.label}}
                </li>
            </ul>
            <Hello></Hello>
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
                items: Store.fetch(),
                /*items:[
                    {
                        label:'apple',
                        isFinished:true
                    },
                    {
                        label:'banana',
                        isFinished:false
                    }
                ],*/
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

        },
        watch:{
            items:{
                handler:function (items) {
                    Store.save(items)
                },
                deep:true//如果不这样写，没有深层赋值，那么items里只是一个key更改的话不会检测到
            }
        }
    }

</script>
<style>
    .message{
        color: red;
    }
    .finished{
        text-decoration: underline;
    }
</style>