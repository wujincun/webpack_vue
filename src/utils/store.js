/**
 * Created by Administrator on 2016/8/12 0012.
 */
const STORAGE_KEY = 'todos-vuejs';//const es6方法，定义常量
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}
