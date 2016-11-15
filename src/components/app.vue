
<template>
        <div id="todoList">
            <!--<component-a></component-a>-->
            <Headers msg="something interesting"></Headers>
            <h1 v-text="title"></h1><!--<h1>{{title}}</h1>相同-->
            <input type="text" v-model="newItem"  @keyup.enter="addNew"><!--v-model双向绑定-->
            <ul>
                <li v-for="item in items" >
                    <span :class="{finished:item.isFinished}" @click="toggleFinish(item)">{{item.label}}</span>
                    <span class="delete" @click="deleteLine(item)">X</span>
                </li>
            </ul>
            <Hello></Hello>
            <ul>
                <li><router-link to="/ComponentA">第一页</router-link></li>
                <li><router-link to="/ComponentB">第二页</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
</template>
<script>
    import  "../utils/flexible"
    import Store from "../utils/store"
    import Hello from "./hello"
    import Headers from "./header"

    /*import ComponentA from "./components/componentA"*/
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
            Hello,
            Headers
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
            },
            deleteLine(item){
                var index = this.items.indexOf(item);
                this.items.splice(index, 1)
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
<style src="../css/main.css"></style>