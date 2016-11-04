
/**
 * Created by wujincun on 2016/10/31.
 */
import Vue from "vue"
import App from "./app.vue"

//创建一个vue实例,v1挂载在body上面，v2不能挂在到html或body上，要挂在到正常元素上
new Vue({
    el: '#app',
    components: { App }
});
