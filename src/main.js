
/**
 * Created by wujincun on 2016/10/31.
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import Second from './second.vue'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);



//路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: App
        },
        {
            path: '/second',
            component: Second
        }
    ]
});

//创建一个vue实例,v1挂载在body上面，v2不能挂在到html或body上，要挂在到正常元素上
new Vue({
    router:router,
    el: '#app',
    components: { App }
});
