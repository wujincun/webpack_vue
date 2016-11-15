
/**
 * Created by wujincun on 2016/10/31.
 */
import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
//import store from './store'
//import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.use(Vuex);

import ComponentA from './components/componentA.vue'
import ComponentB from './components/componentB.vue'


//路由
const routes = [
    { path: '/ComponentA', component: ComponentA },
    { path: '/ComponentB', component: ComponentB }
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routes
});

//创建一个vue实例,v1挂载在body上面，v2不能挂在到html或body上，要挂在到正常元素上
new Vue({
    router:router,
    //store,
    el: '#app',
    components: { App }
});
