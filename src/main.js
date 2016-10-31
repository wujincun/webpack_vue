
/**
 * Created by wujincun on 2016/10/31.
 */
//import Vue from 'vue'
var Vue = require("vue");
import App from './vue/index.vue'

//创建一个vue实例,挂载在body上面
new Vue({
    el: 'body',
    components: { App }
});
