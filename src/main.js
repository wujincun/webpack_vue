
/**
 * Created by wujincun on 2016/10/31.
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import ComponentA from './components/componentA.vue'

Vue.use(VueRouter);


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/ComponentA', component: ComponentA },
    { path: '/App', component: App }
];

//路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routes
});

//创建一个vue实例,v1挂载在body上面，v2不能挂在到html或body上，要挂在到正常元素上
new Vue({
    router:router,
    el: '#app',
    components: { App }
});
